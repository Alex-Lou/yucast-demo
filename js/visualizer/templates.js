// js/visualizer/templates.js

const VisualizerTemplates = {
    getDemoHTML: () => `
        <div class="demo-test-label">Test me</div>
        
        <div id="engagement-layer" class="engagement-overlay">
            <h2 id="engagement-message" class="engagement-text">Pretty smooth, isn't it?</h2>
        </div>

        <div class="aurora-container" style="position: absolute; inset: 0; pointer-events: none; z-index: 0;">
            <div class="aurora-blob blob-cyan"></div>
            <div class="aurora-blob blob-purple"></div>
            <div class="aurora-blob blob-pink"></div>
        </div>

        <svg id="interactive-svg" class="w-full h-full" viewBox="0 0 800 400" style="position: relative; z-index: 1; user-select: none; overflow: visible;">
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="#a855f7" stop-opacity="0.8"/>
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <style>
                    .add-btn { cursor: pointer; opacity: 0; transition: opacity 0.2s; }
                    .draggable-group:hover .add-btn { opacity: 1; }
                    .add-btn:hover circle { fill: #fff; }
                    .connector-handle { fill: #1a1a24; }
                </style>
            </defs>
            
            <g id="connections-layer" filter="url(#glow)"></g>
            <path id="temp-connection" d="" stroke="#fff" stroke-width="2" stroke-dasharray="5 5" fill="none" opacity="0.5" pointer-events="none"/>

            <g id="nodes-layer">
                <g id="node-prod-1" class="draggable-group producer-node" transform="translate(0,0)">
                    <rect x="60" y="170" width="80" height="60" rx="12" fill="#1a1a24" stroke="#22d3ee" stroke-width="2"/>
                    <text x="100" y="195" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold" style="pointer-events: none;">Producer</text>
                    <text x="100" y="215" text-anchor="middle" class="node-metric metric-throughput">0 msg/s</text>
                    <circle class="connector-handle handle-source" cx="140" cy="200" r="6" stroke="#22d3ee" data-id="node-prod-1" data-type="source" />
                    <g class="add-btn" transform="translate(130, 160)" onclick="VisualizerEngine.openDuplicateModal('node-prod-1', 'producer')">
                        <circle r="10" fill="#22d3ee" stroke="none"/>
                        <path d="M-4 0 h8 M0 -4 v8" stroke="#1a1a24" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </g>
                
                <g id="node-cluster" class="draggable-group" transform="translate(0,0)">
                    <rect x="320" y="140" width="160" height="120" rx="16" fill="#1a1a24" stroke="#a855f7" stroke-width="2"/>
                    <text x="400" y="170" text-anchor="middle" fill="#a855f7" font-size="14" font-weight="bold" style="pointer-events: none;">Kafka Cluster</text>
                    <text x="400" y="195" text-anchor="middle" class="node-metric" fill="#fff">CPU: <tspan class="metric-cpu">12</tspan>% | RAM: <tspan class="metric-ram">4.2</tspan>GB</text>
                    <text x="400" y="215" text-anchor="middle" class="node-metric" fill="#fff">Disk: <tspan class="metric-disk">45</tspan>MB/s</text>
                    <circle class="connector-handle handle-target" cx="320" cy="200" r="6" stroke="#a855f7" data-id="node-cluster" data-type="target" />
                    <circle class="connector-handle handle-source" cx="480" cy="200" r="6" stroke="#a855f7" data-id="node-cluster" data-type="source" />
                </g>
                
                <g id="node-cons-1" class="draggable-group consumer-node" transform="translate(0,0)">
                    <rect x="660" y="170" width="80" height="60" rx="12" fill="#1a1a24" stroke="#22d3ee" stroke-width="2"/>
                    <text x="700" y="195" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold" style="pointer-events: none;">Consumer</text>
                    <text x="700" y="215" text-anchor="middle" class="node-metric metric-lag">Lag: 0 ms</text>
                    <circle class="connector-handle handle-target" cx="660" cy="200" r="6" stroke="#22d3ee" data-id="node-cons-1" data-type="target" />
                    <g class="add-btn" transform="translate(730, 160)" onclick="VisualizerEngine.openDuplicateModal('node-cons-1', 'consumer')">
                        <circle r="10" fill="#22d3ee" stroke="none"/>
                        <path d="M-4 0 h8 M0 -4 v8" stroke="#1a1a24" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </g>
            </g>

            <text id="move-hint" x="100" y="250" class="hint-label">move me</text>
            
            <g id="particles-layer" style="pointer-events: none;"></g>
        </svg>
    `
};