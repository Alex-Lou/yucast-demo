// js/components/navbar.js
// Generates the navigation bar component

function renderNavbar(activePage = 'index') {
    const navLinks = [
        { href: 'index.html#features', key: 'nav_features', id: 'features' },
        { href: 'index.html#demo', key: 'nav_schema', id: 'demo' },
        { href: 'index.html#architecture', key: 'nav_arch', id: 'architecture' },
        { href: 'pricing.html', key: 'nav_pricing', id: 'pricing' },
        { href: 'index.html#contact', key: 'nav_contact', id: 'contact' }
    ];

    const navLinksHtml = navLinks.map(link => {
        const isActive = link.id === activePage;
        const linkClass = isActive ? '[NAV_LINK_ACTIVE]' : '[NAV_LINK]';
        return `<a href="${link.href}" class="${linkClass}" data-i18n="${link.key}">${getTranslation(link.key)}</a>`;
    }).join('');

    return `
    <nav id="navbar" class="[NAVBAR]">
        <div class="[NAVBAR_CONTAINER]">
            <a href="index.html" class="[LOGO_CONTAINER]">
                <div class="[LOGO_ICON]">
                    <img src="assets/images/logo.png" alt="Yucast Logo" class="logo-img">
                </div>
                <span class="[LOGO_TEXT]">Yucast</span>
            </a>
            
            <div class="[NAV_LINKS]">
                ${navLinksHtml}
            </div>
            
            <div class="[FLEX_GAP_4]" style="display: flex; align-items: center; gap: 1rem;">
                ${renderLangDropdown()}
                <a href="index.html#contact" class="[CTA_BUTTON]" data-i18n="cta_touch">${getTranslation('cta_touch')}</a>
            </div>
        </div>
    </nav>
    `;
}

function injectNavbar(activePage = 'index') {
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = renderNavbar(activePage);
    }
}