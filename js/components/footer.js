// js/components/footer.js
// Footer component

function renderFooter() {
    return `
    <footer class="[FOOTER]">
        <div class="[CONTAINER_LG] [FLEX_COL_CENTER]">
            <p class="[FOOTER_TEXT]" data-i18n="footer_copyright">${getTranslation('footer_copyright')}</p>
            <div class="[FOOTER_LINKS]">
                <a href="#" class="[FOOTER_LINK]" data-i18n="footer_privacy">${getTranslation('footer_privacy')}</a>
                <a href="#" class="[FOOTER_LINK]" data-i18n="footer_terms">${getTranslation('footer_terms')}</a>
                <a href="index.html#contact" class="[FOOTER_LINK]" data-i18n="nav_contact">${getTranslation('nav_contact')}</a>
            </div>
        </div>
    </footer>
    `;
}

function injectFooter() {
    const container = document.getElementById('footer-container');
    if (container) {
        container.innerHTML = renderFooter();
    }
}
