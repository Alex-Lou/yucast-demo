// js/pages/index.js
// Orchestration de la landing page (index.html)

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
                console.error('VisualizerEngine.init failed:', err);
            }
        }

        initEmailJS();
        setupContactForm();
        setupContactReveal();
    } catch (err) {
        console.error('initIndexPage failed:', err);
    } finally {
        // Important: ne jamais laisser la page invisible si un script plante (Safari/iOS).
        document.body.classList.add('loaded');
    }
}

document.addEventListener('DOMContentLoaded', initIndexPage);
Sur
