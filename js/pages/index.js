// js/pages/index.js
// Orchestration de la landing page (index.html)

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

    if (typeof VisualizerEngine !== 'undefined') {
        VisualizerEngine.init('demo');
    }

    initEmailJS();
    setupContactForm();
    setupContactReveal();

    document.body.classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', initIndexPage);
