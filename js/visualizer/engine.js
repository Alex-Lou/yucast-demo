const VisualizerEngine = {
    svg: null,
    connectionsLayer: null,
    particlesLayer: null,
    nodesLayer: null,
    tempPath: null,
    
    selectedElement: null,
    offset: { x: 0, y: 0 },
    
    isDrawing: false,
    drawingSourceId: null,
    drawingStartPos: { x: 0, y: 0 },
    
    edges: [],
    
    createdNodesCount: 0,
    engagementTimer: null,
    hasTriggeredEngagement: false,
    
    hasMovedInitialProducer: false,
    
    pendingType: null,
    pendingSourceId: null,

    init: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container || typeof VisualizerTemplates === 'undefined') return;

        container.style.position = 'relative';
        container.style.backgroundColor = '#0d0d12'; 
        container.style.overflow = 'hidden';
        container.innerHTML = VisualizerTemplates.getDemoHTML();

        this.svg = document.getElementById('interactive-svg');
        this.connectionsLayer = document.getElementById('connections-layer');
        this.particlesLayer = document.getElementById('particles-layer');
        this.nodesLayer = document.getElementById('nodes-layer');
        this.tempPath = document.getElementById('temp-connection');

        this.hasMovedInitialProducer = false;
        this.edges = [
            { id: 'e1', source: 'node-prod-1', target: 'node-cluster' },
            { id: 'e2', source: 'node-cluster', target: 'node-cons-1' }
        ];

        this.setupEvents();
        this.setupEngagement(container);
        
        const groups = this.nodesLayer.querySelectorAll('.draggable-group');
        groups.forEach(group => {
            if (group.transform.baseVal.length === 0) {
                const translate = this.svg.createSVGTransform();
                translate.setTranslate(0, 0);
                group.transform.baseVal.appendItem(translate);
            }
        });

        setTimeout(() => this.updateConnections(), 50);
        
        this.updateRandomMetrics();
        setInterval(() => this.updateRandomMetrics(), 2000);
    },

    setupEvents: function() {
        this.svg.addEventListener('mousedown', (evt) => this.handleMouseDown(evt));
        this.svg.addEventListener('mousemove', (evt) => this.handleMouseMove(evt));
        this.svg.addEventListener('mouseup', (evt) => this.handleMouseUp(evt));
        this.svg.addEventListener('mouseleave', () => { 
            this.selectedElement = null; 
            this.isDrawing = false; 
            this.tempPath.style.display = 'none'; 
        });
    },

    getMousePosition: function(evt) {
        const CTM = this.svg.getScreenCTM();
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    },

    handleMouseDown: function(evt) {
        if (evt.target.classList.contains('handle-source')) {
            evt.stopPropagation();
            this.isDrawing = true;
            this.drawingSourceId = evt.target.getAttribute('data-id');
            this.drawingStartPos = this.getHandlePosition(this.drawingSourceId, 'source');
            return;
        }

        const group = evt.target.closest('.draggable-group');
        if (group && !evt.target.closest('.add-btn')) {
            this.selectedElement = group;
            
            let transforms = this.selectedElement.transform.baseVal;
            if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                const translate = this.svg.createSVGTransform();
                translate.setTranslate(0, 0);
                this.selectedElement.transform.baseVal.insertItemBefore(translate, 0);
            }
            
            let transform = transforms.getItem(0);
            let mPos = this.getMousePosition(evt);
            
            this.offset.x = mPos.x - transform.matrix.e;
            this.offset.y = mPos.y - transform.matrix.f;
            
            this.nodesLayer.appendChild(this.selectedElement); 
        }
    },

    handleMouseMove: function(evt) {
        const mPos = this.getMousePosition(evt);

        if (this.isDrawing) {
            const curve = 50;
            const d = `M ${this.drawingStartPos.x} ${this.drawingStartPos.y} C ${this.drawingStartPos.x + curve} ${this.drawingStartPos.y}, ${mPos.x - curve} ${mPos.y}, ${mPos.x} ${mPos.y}`;
            this.tempPath.setAttribute('d', d);
            this.tempPath.style.display = 'block';
            return;
        }

        if (this.selectedElement) {
            evt.preventDefault();
            
            if (!this.hasMovedInitialProducer && this.selectedElement.id === 'node-prod-1') {
                const hintLabel = document.getElementById('move-hint');
                if (hintLabel) {
                    hintLabel.classList.add('fade-out');
                    this.hasMovedInitialProducer = true;
                }
            }

            let transform = this.selectedElement.transform.baseVal.getItem(0);
            transform.setTranslate(mPos.x - this.offset.x, mPos.y - this.offset.y);
            this.updateConnections();
        }
    },

    handleMouseUp: function(evt) {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.tempPath.style.display = 'none';
            this.tempPath.setAttribute('d', '');

            const targetEl = evt.target;
            if (targetEl.classList.contains('handle-target')) {
                const targetId = targetEl.getAttribute('data-id');
                if (this.drawingSourceId !== targetId) {
                    const exists = this.edges.find(e => e.source === this.drawingSourceId && e.target === targetId);
                    if (!exists) {
                        this.edges.push({ id: `edge-${Date.now()}`, source: this.drawingSourceId, target: targetId });
                        this.updateConnections();
                        this.updateRandomMetrics();
                    }
                }
            }
        }
        this.selectedElement = null;
    },

    getHandlePosition: function(nodeId, type) {
        const node = document.getElementById(nodeId);
        if(!node) return { x:0, y:0 };
        const handle = node.querySelector(`.handle-${type}`);
        if(!handle) return { x:0, y:0 };
        
        const cx = parseFloat(handle.getAttribute('cx'));
        const cy = parseFloat(handle.getAttribute('cy'));
        
        const transform = (node.transform.baseVal.length > 0) 
            ? node.transform.baseVal.getItem(0).matrix 
            : { e: 0, f: 0 };
            
        return { x: cx + transform.e, y: cy + transform.f };
    },

    updateConnections: function() {
        this.connectionsLayer.innerHTML = '';
        this.particlesLayer.innerHTML = '';

        this.edges.forEach(edge => {
            const start = this.getHandlePosition(edge.source, 'source');
            const end = this.getHandlePosition(edge.target, 'target');
            
            if((start.x === 0 && start.y === 0) || (end.x === 0 && end.y === 0)) return;
            
            let type = edge.source.includes('prod') ? 'producer' : 'consumer';
            this.createLink(edge.id, start, end, type);
        });
    },

    createLink: function(edgeId, p1, p2, type) {
        const pathId = `path-${edgeId}`;
        const curve = 80;
        const d = `M ${p1.x} ${p1.y} C ${p1.x + curve} ${p1.y}, ${p2.x - curve} ${p2.y}, ${p2.x} ${p2.y}`;
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("id", pathId);
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", type === 'producer' ? "url(#lineGradient)" : "#a855f7");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-dasharray", "10 5");
        path.setAttribute("class", "animate-dash");
        this.connectionsLayer.appendChild(path);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", "5");
        circle.setAttribute("fill", type === 'producer' ? "#22d3ee" : "#ec4899");
        
        const animate = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        animate.setAttribute("dur", "2s");
        animate.setAttribute("repeatCount", "indefinite");
        if(type === 'consumer') animate.setAttribute("begin", "0.5s");
        
        const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
        mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${pathId}`);
        animate.appendChild(mpath);
        circle.appendChild(animate);
        this.particlesLayer.appendChild(circle);
    },

    openDuplicateModal: function(sourceId, type, evt) {
        if (evt && typeof evt.stopPropagation === 'function') evt.stopPropagation();
        this.pendingSourceId = sourceId;
        this.pendingType = type;
        
        const nameInput = document.getElementById('conf-name');
        const ramInput = document.getElementById('conf-ram');
        if(nameInput) nameInput.value = type === 'producer' ? 'New-Service' : 'New-Worker';
        if(ramInput) ramInput.value = '2GB';

        const modal = document.getElementById('config-modal');
        if(modal) {
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.add('open'), 10);
        }
    },

    closeModal: function() {
        const modal = document.getElementById('config-modal');
        if(modal) {
            modal.classList.remove('open');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    },

    deployResource: function() {
        const name = document.getElementById('conf-name').value || 'Service';
        const ram = document.getElementById('conf-ram').value;
        const sourceNode = document.getElementById(this.pendingSourceId);
        if (!sourceNode) return;

        const newId = `node-${this.pendingType}-${Date.now()}`;
        const clone = sourceNode.cloneNode(true);
        clone.id = newId;

        const textElement = clone.querySelector('text[font-weight="bold"]');
        if(textElement) textElement.textContent = name;
        clone.setAttribute('data-ram', ram);
        
        clone.querySelectorAll('.connector-handle').forEach(handle => handle.setAttribute('data-id', newId));
        
        const btn = clone.querySelector('.add-btn');
        if(btn) btn.setAttribute('onclick', `VisualizerEngine.openDuplicateModal('${newId}', '${this.pendingType}')`);

        const currentTransform = sourceNode.transform.baseVal.length > 0 ? sourceNode.transform.baseVal.getItem(0) : { matrix: { e: 0, f: 0 } };
        const newTranslate = this.svg.createSVGTransform();
        const offsetX = (Math.random() * 80) - 40;
        const offsetY = (Math.random() * 80) + 20;
        newTranslate.setTranslate(currentTransform.matrix.e + offsetX, currentTransform.matrix.f + offsetY);
        clone.transform.baseVal.clear();
        clone.transform.baseVal.appendItem(newTranslate);

        this.nodesLayer.appendChild(clone);
        this.closeModal();

        this.createdNodesCount++;
        if (this.createdNodesCount >= 4) {
            this.triggerEngagement();
        }
    },

    setupEngagement: function(container) {
        if (typeof IntersectionObserver === 'undefined') {
            if (!this.hasTriggeredEngagement && !this.engagementTimer) {
                this.engagementTimer = setTimeout(() => this.triggerEngagement(), 60000);
            }
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!this.hasTriggeredEngagement && !this.engagementTimer) {
                        this.engagementTimer = setTimeout(() => this.triggerEngagement(), 60000);
                    }
                } else {
                    if (this.engagementTimer) {
                        clearTimeout(this.engagementTimer);
                        this.engagementTimer = null;
                    }
                }
            });
        }, { threshold: 0.5 });
        observer.observe(container);
    },

    triggerEngagement: function() {
        if (this.hasTriggeredEngagement) return;
        this.hasTriggeredEngagement = true;
        
        const layer = document.getElementById('engagement-layer');
        const msg = document.getElementById('engagement-message');
        
        if(!layer || !msg) return;

        msg.innerHTML = "Pretty smooth, isn't it? <br><span style='font-size:1rem; font-weight:400; opacity:0.7; display:block; margin-top:10px;'>Seamless visualization in real-time.</span>";
        layer.classList.add('active');

        setTimeout(() => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                msg.innerHTML = "Ready to build the real thing? <br><span style='font-size:1rem; font-weight:400; opacity:0.7; display:block; margin-top:10px;'>Scroll down to see our architecture.</span>";
                msg.style.opacity = '1';
                msg.style.transform = 'translateY(0)';
            }, 400);
        }, 3000);

        setTimeout(() => { 
            layer.classList.remove('active'); 
        }, 6500);
    },

    updateRandomMetrics: function() {
        document.querySelectorAll('.producer-node').forEach(node => {
            const ram = node.getAttribute('data-ram') || '2GB';
            let mult = ram === '8GB' ? 2.5 : (ram === '32GB' ? 6 : 1);
            const val = Math.floor((Math.random() * 700 + 800) * mult);
            const metric = node.querySelector('.metric-throughput');
            if(metric) metric.textContent = `${val.toLocaleString()} msg/s`;
        });

        document.querySelectorAll('.consumer-node').forEach(node => {
            const ram = node.getAttribute('data-ram') || '2GB';
            let reducer = ram === '8GB' ? 30 : (ram === '32GB' ? 60 : 0);
            let val = Math.max(0, Math.floor(Math.random() * 150) - reducer);
            const metric = node.querySelector('.metric-lag');
            if(metric) {
                metric.textContent = `Lag: ${val} ms`;
                metric.style.fill = val > 100 ? '#f87171' : '#9ca3af';
            }
        });

        const cpuEl = document.querySelector('.metric-cpu');
        if(cpuEl) cpuEl.textContent = Math.min(99, 10 + (this.edges.length * 3));
    }
};

window.closeModal = () => VisualizerEngine.closeModal();
window.deployResource = () => VisualizerEngine.deployResource();
