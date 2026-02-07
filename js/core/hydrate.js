function hydrateStyles(styles) {
    if (!styles || typeof styles !== 'object') return;

    document.querySelectorAll('*').forEach((el) => {
        const classValue = el.getAttribute('class');
        if (!classValue || classValue.indexOf('[') === -1) return;

        const newClass = classValue.replace(/\[([A-Z_0-9]+)\]/g, (match, key) => styles[key] || match);
        if (newClass !== classValue) el.setAttribute('class', newClass);
    });
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hydrateStyles };
}
