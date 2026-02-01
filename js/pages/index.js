// js/pages/index.js
// Page logic for index.html (homepage)

const EMAILJS_CONFIG = {
    publicKey: 'AlcXNClkk7JrUAF-y',
    serviceId: 'service_9nkxilk',
    templateId: 'template_c08wjnn'
};

const featuresData = [
    { icon: '🌊', titleKey: 'feature_1_title', descKey: 'feature_1_desc' },
    { icon: '🔍', titleKey: 'feature_2_title', descKey: 'feature_2_desc' },
    { icon: '🧹', titleKey: 'feature_3_title', descKey: 'feature_3_desc' },
    { icon: '📊', titleKey: 'feature_4_title', descKey: 'feature_4_desc' },
    { icon: '🎨', titleKey: 'feature_5_title', descKey: 'feature_5_desc' },
    { icon: '⚡', titleKey: 'feature_6_title', descKey: 'feature_6_desc' }
];

const architectureData = [
    {
        titleKey: "arch_backend_title",
        mainIcon: "☕",
        iconClass: "ARCH_ICON_BACKEND",
        items: [
            { abbr: "SB", nameKey: "arch_springboot_name", descKey: "arch_springboot_desc", iconClass: "STACK_ICON_SB" },
            { abbr: "K", nameKey: "arch_kafka_name", descKey: "arch_kafka_desc", iconClass: "STACK_ICON_K" },
            { abbr: "WS", nameKey: "arch_websocket_name", descKey: "arch_websocket_desc", iconClass: "STACK_ICON_WS" }
        ]
    },
    {
        titleKey: "arch_frontend_title",
        mainIcon: "⚛️",
        iconClass: "ARCH_ICON_FRONTEND",
        items: [
            { abbr: "R", nameKey: "arch_react_name", descKey: "arch_react_desc", iconClass: "STACK_ICON_R" },
            { abbr: "RF", nameKey: "arch_reactflow_name", descKey: "arch_reactflow_desc", iconClass: "STACK_ICON_RF" },
            { abbr: "TW", nameKey: "arch_tailwind_name", descKey: "arch_tailwind_desc", iconClass: "STACK_ICON_TW" }
        ]
    }
];

// --- RENDERING ---
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
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight" data-i18n="${feature.titleKey}">${getTranslation(feature.titleKey)}</h3>
                <p class="text-gray-400 leading-relaxed text-sm" data-i18n="${feature.descKey}">${getTranslation(feature.descKey)}</p>
            </div>
        </div>
    `).join('');
}

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
                <span class="${iconClasses[stack.iconClass]}">${stack.mainIcon}</span>
                <span data-i18n="${stack.titleKey}">${getTranslation(stack.titleKey)}</span>
            </h3>
            <div class="space-y-4">
                ${stack.items.map(item => `
                    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <div class="${iconClasses[item.iconClass]}">${item.abbr}</div>
                        <div>
                            <div class="font-semibold text-white text-sm" data-i18n="${item.nameKey}">${getTranslation(item.nameKey)}</div>
                            <div class="text-xs text-gray-500 mt-0.5" data-i18n="${item.descKey}">${getTranslation(item.descKey)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// --- CONTACT FORM ---
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');

    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');

    try {
        await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form);
        showToast(getTranslation('toast_success'), 'success');
        form.reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
        showToast(getTranslation('toast_error'), 'error');
    } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
    }
}

function setupContactReveal() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    if (urlParams.get('showContact') === 'true' || hash === '#contact') {
        contactSection.classList.remove('hidden-section');
        contactSection.classList.add('visible');
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (hash === '#contact') history.replaceState(null, null, ' '); 
        }, 100);
    }

    document.querySelectorAll('a[href$="#contact"]').forEach(link => {
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

// --- MAIN INIT ---
function initIndexPage() {
    injectBackground('default');
    injectNavbar('index', './');
    injectFooter();

    const combinedStyles = { ...SHARED_STYLES, ...INDEX_STYLES };
    hydrateStyles(combinedStyles);

    setupNavbar();
    setupSmoothScroll();

    renderFeatures();
    renderArchitecture();

    // Init du nouveau moteur Visualizer
    if (typeof VisualizerEngine !== 'undefined') {
        VisualizerEngine.init('demo');
    }

    initEmailJS();
    setupContactForm();
    setupContactReveal();

    document.body.classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', initIndexPage);