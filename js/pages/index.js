function initIndexPage() {
    try {
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
            try {
                VisualizerEngine.init('demo');
            } catch (err) {
            }
        }

        initEmailJS();
        setupContactForm();
        setupContactReveal();
    } finally {
        document.body.classList.add('loaded');
    }
}

document.addEventListener('DOMContentLoaded', initIndexPage);
