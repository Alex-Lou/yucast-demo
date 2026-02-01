// js/pages/index.js
// Page logic for index.html (homepage)

// =============================================
// EMAILJS CONFIGURATION
// =============================================
const EMAILJS_CONFIG = {
    publicKey: 'AlcXNClkk7JrUAF-y',
    serviceId: 'service_9nkxilk',
    templateId: 'template_c08wjnn'
};

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
        iconClass: "ARCH_ICON_BACKEND",
        items: [
            { abbr: "SB", name: "Spring Boot 3.2", desc: "Java 21 • Reactive WebFlux", iconClass: "STACK_ICON_SB" },
            { abbr: "K", name: "Apache Kafka", desc: "Admin Client • Streams API", iconClass: "STACK_ICON_K" },
            { abbr: "WS", name: "WebSocket", desc: "STOMP • Real-time metrics", iconClass: "STACK_ICON_WS" }
        ]
    },
    {
        title: "Frontend Stack",
        mainIcon: "⚛️",
        iconClass: "ARCH_ICON_FRONTEND",
        items: [
            { abbr: "R", name: "React 18", desc: "Hooks • Context API", iconClass: "STACK_ICON_R" },
            { abbr: "RF", name: "React Flow", desc: "Interactive node diagrams", iconClass: "STACK_ICON_RF" },
            { abbr: "TW", name: "Tailwind CSS", desc: "Utility-first styling", iconClass: "STACK_ICON_TW" }
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
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">${feature.icon}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight">${feature.title}</h3>
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

    const iconClasses = {
        ARCH_ICON_BACKEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-lg shadow-inner",
        ARCH_ICON_FRONTEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-lg shadow-inner",
        STACK_ICON_SB: "w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-sm shadow-sm",
        STACK_ICON_K: "w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-400 font-bold text-sm shadow-sm",
        STACK_ICON_WS: "w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm shadow-sm",
        STACK_ICON_R: "w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm shadow-sm",
        STACK_ICON_RF: "w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm shadow-sm",
        STACK_ICON_TW: "w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold text-sm shadow-sm"
    };

    container.innerHTML = architectureData.map((stack, index) => `
        <div class="glass rounded-2xl p-8 animate-fade-in-up" style="animation-delay: ${index * 150}ms">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="${iconClasses[stack.iconClass]}">
                    ${stack.mainIcon}
                </span>
                ${stack.title}
            </h3>
            <div class="space-y-4">
                ${stack.items.map(item => `
                    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <div class="${iconClasses[item.iconClass]}">
                            ${item.abbr}
                        </div>
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
// CONTACT FORM
// =============================================

/**
 * Initialize EmailJS
 */
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
}

/**
 * Setup contact form submission
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');

    // Disable and show loading
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');

    try {
        await emailjs.sendForm(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            form
        );

        showToast('Message sent successfully!', 'success');
        form.reset();

    } catch (error) {
        console.error('EmailJS Error:', error);
        showToast('Failed to send message. Please try again.', 'error');

    } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
    }
}

// =============================================
// CONTACT SECTION REVEAL
// =============================================

/**
 * Setup contact section reveal on button click
 */
function setupContactReveal() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Check URL params for showContact
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    if (urlParams.get('showContact') === 'true' || hash === '#contact') {
        contactSection.classList.remove('hidden-section');
        contactSection.classList.add('visible');

        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (urlParams.get('showContact')) {
                window.history.replaceState({}, '', window.location.pathname + '#contact');
            }
        }, 100);
    }

    // Setup click handlers for contact links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            contactSection.classList.remove('hidden-section');
            contactSection.classList.add('visible');
            setTimeout(() => {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        });
    });
}

// =============================================
// INITIALIZATION
// =============================================

/**
 * Initialize index page
 */
function initIndexPage() {
    // Hydrate styles (SHARED + INDEX combined)
    const combinedStyles = { ...SHARED_STYLES, ...INDEX_STYLES };
    hydrateStyles(combinedStyles);

    // Setup core utilities
    setupNavbar();
    setupSmoothScroll();

    // Render dynamic content
    renderFeatures();
    renderArchitecture();

    // Setup contact
    initEmailJS();
    setupContactForm();
    setupContactReveal();

}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initIndexPage);