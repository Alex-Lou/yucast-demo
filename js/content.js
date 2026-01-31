// js/content.js
// Dynamic content rendering for Yucast landing page

// =============================================
// FEATURES DATA
// =============================================
const featuresData = [
    { 
        icon: '🌊', 
        title: 'Real-Time Flow Visualization', 
        desc: 'Watch your data flow through topics and partitions in real-time with beautiful, animated diagrams.' 
    },
    { 
        icon: '🔍', 
        title: 'Multi-Cluster Management', 
        desc: 'Connect and monitor multiple Kafka clusters from a single, unified dashboard.' 
    },
    { 
        icon: '🧹', 
        title: 'Orphan Cleanup', 
        desc: 'Automatically detect and clean up unused topics and stale connections to keep your cluster healthy.' 
    },
    { 
        icon: '📊', 
        title: 'Live Metrics', 
        desc: 'Real-time metrics broadcasting via WebSocket. Throughput, lag, partition health — all at a glance.' 
    },
    { 
        icon: '🎨', 
        title: 'Visual Status System', 
        desc: 'Intuitive color-coded status indicators with smooth animations show cluster health instantly.' 
    },
    { 
        icon: '⚡', 
        title: 'Blazing Fast', 
        desc: 'Built with performance in mind. Handles thousands of topics without breaking a sweat.' 
    }
];

// =============================================
// ARCHITECTURE DATA
// =============================================
const architectureData = [
    {
        title: "Backend Stack",
        mainIcon: "☕",
        iconBg: "from-orange-500/20 to-red-500/20", 
        items: [
            { 
                abbr: "SB", 
                name: "Spring Boot 3.2", 
                desc: "Java 21 • Reactive WebFlux", 
                colorBg: "bg-green-500/10", 
                colorText: "text-green-400" 
            },
            { 
                abbr: "K", 
                name: "Apache Kafka", 
                desc: "Admin Client • Streams API", 
                colorBg: "bg-gray-500/10", 
                colorText: "text-gray-400" 
            },
            { 
                abbr: "WS", 
                name: "WebSocket", 
                desc: "STOMP • Real-time metrics", 
                colorBg: "bg-blue-500/10", 
                colorText: "text-blue-400" 
            }
        ]
    },
    {
        title: "Frontend Stack",
        mainIcon: "⚛️",
        iconBg: "from-cyan-500/20 to-blue-500/20", 
        items: [
            { 
                abbr: "R", 
                name: "React 18", 
                desc: "Hooks • Context API", 
                colorBg: "bg-cyan-500/10", 
                colorText: "text-cyan-400" 
            },
            { 
                abbr: "RF", 
                name: "React Flow", 
                desc: "Interactive node diagrams", 
                colorBg: "bg-purple-500/10", 
                colorText: "text-purple-400" 
            },
            { 
                abbr: "TW", 
                name: "Tailwind CSS", 
                desc: "Utility-first styling", 
                colorBg: "bg-teal-500/10", 
                colorText: "text-teal-400" 
            }
        ]
    }
];

// =============================================
// RENDER FUNCTIONS
// =============================================

/**
 * Renders the features grid
 */
function renderFeatures() {
    const container = document.getElementById('features-grid');
    if (!container) return;
    
    container.innerHTML = featuresData.map((feature, index) => `
        <div class="card-hover group relative p-8 rounded-2xl glass animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <!-- Hover glow effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div class="relative z-10">
                <!-- Icon -->
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">${feature.icon}</span>
                </div>
                
                <!-- Title -->
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight">${feature.title}</h3>
                
                <!-- Description -->
                <p class="text-gray-400 leading-relaxed text-sm">${feature.desc}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Renders the architecture grid
 */
function renderArchitecture() {
    const container = document.getElementById('architecture-grid');
    if (!container) return;
    
    container.innerHTML = architectureData.map((stack, index) => `
        <div class="glass rounded-2xl p-8 animate-fade-in-up" style="animation-delay: ${index * 150}ms">
            <!-- Stack Header -->
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-10 h-10 rounded-lg bg-gradient-to-br ${stack.iconBg} flex items-center justify-center text-lg shadow-inner">
                    ${stack.mainIcon}
                </span>
                ${stack.title}
            </h3>
            
            <!-- Stack Items -->
            <div class="space-y-4">
                ${stack.items.map(item => `
                    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <!-- Abbreviation Badge -->
                        <div class="w-12 h-12 rounded-lg ${item.colorBg} flex items-center justify-center ${item.colorText} font-bold text-sm shadow-sm">
                            ${item.abbr}
                        </div>
                        
                        <!-- Info -->
                        <div>
                            <div class="font-semibold text-white text-sm">${item.name}</div>
                            <div class="text-xs text-gray-500 mt-0.5">${item.desc}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    renderFeatures();
    renderArchitecture();
});