// js/core/hydrate.js
// Shared style hydration function for all pages

/**
 * Hydrates all [TOKEN] placeholders in the DOM with actual style values
 * @param {Object} STYLES - The styles object containing token-value pairs
 */
function hydrateStyles(STYLES) {
    if (!STYLES || typeof STYLES !== 'object') {
        console.error('hydrateStyles: Invalid STYLES object provided');
        return;
    }

    const allElements = document.querySelectorAll('*');
    let hydratedCount = 0;

    allElements.forEach(el => {
        // Hydrate class attributes
        const classValue = el.getAttribute('class');
        if (classValue && classValue.includes('[')) {
            const newClass = classValue.replace(/\[([A-Z_0-9]+)\]/g, (match, key) => {
                if (STYLES[key]) {
                    hydratedCount++;
                    return STYLES[key];
                }
                console.warn(`hydrateStyles: Token "${key}" not found in STYLES`);
                return match;
            });
            el.setAttribute('class', newClass);
        }
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hydrateStyles };
}