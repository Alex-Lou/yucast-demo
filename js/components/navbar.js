function renderNavbar(activePage = 'index', basePath = '') {
    const path = basePath ? (basePath.endsWith('/') ? basePath : basePath + '/') : '';

    const navLinks = [
        { href: 'index.html#demo', key: 'nav_schema', id: 'demo' },
        { href: 'index.html#features', key: 'nav_features', id: 'features' },
        { href: 'index.html#architecture', key: 'nav_arch', id: 'architecture' },
        { href: 'index.html#contact', key: 'nav_contact', id: 'contact' }
    ];

    const t = (key) => {
        if (typeof window.getTranslation === 'function') {
            return window.getTranslation(key);
        }
        return key;
    };

    const navLinksHtml = navLinks.map(link => {
        const isActive = link.id === activePage;
        const linkClass = isActive ? '[NAV_LINK_ACTIVE]' : '[NAV_LINK]';
        return `<a href="${path}${link.href}" class="${linkClass}" data-i18n="${link.key}">${t(link.key)}</a>`;
    }).join('');

    const dropdownHtml = (typeof renderLangDropdown === 'function') 
        ? renderLangDropdown() 
        : '';

    return `
    <nav id="navbar" class="[NAVBAR]">
        <div class="[NAVBAR_CONTAINER]">
            <a href="${path}index.html" class="[LOGO_CONTAINER]">
                <div class="[LOGO_ICON]">
                    <img src="${path}assets/images/logo.png" alt="Yucast Logo" class="logo-img">
                </div>
                <span class="[LOGO_TEXT]">Yucast</span>
            </a>
            
            <div class="[NAV_LINKS]">
                ${navLinksHtml}
            </div>
            
            <div class="[FLEX_GAP_4]" style="display: flex; align-items: center; gap: 1rem;">
                ${dropdownHtml}
                <a href="${path}index.html#contact" class="[CTA_BUTTON]" data-i18n="cta_touch">${t('cta_touch')}</a>
            </div>
        </div>
    </nav>
    `;
}

function injectNavbar(activePage = 'index', basePath = '') {
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = renderNavbar(activePage, basePath);
        container.style.display = 'block';
    }
}
