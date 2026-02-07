function renderLangDropdown() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const currentData = availableLanguages[currentLang] || availableLanguages['en'];

    const optionsHtml = Object.entries(availableLanguages).map(([code, data]) => {
        const isActive = code === currentLang ? 'active' : '';
        return `
        <div class="lang-option ${isActive}" data-lang="${code}" onclick="selectLanguage('${code}')">
            <span class="flag">${data.flag}</span>
            <span class="lang-name">${data.name}</span>
            <span class="check">✓</span>
        </div>
        `;
    }).join('');

    return `
    <div class="lang-dropdown" id="lang-dropdown">
        <button class="lang-dropdown-btn" onclick="toggleLangDropdown()">
            <span class="flag" id="current-flag">${currentData.flag}</span>
            <span id="current-lang">${currentLang.toUpperCase()}</span>
            <svg class="arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
        </button>
        <div class="lang-dropdown-menu" id="lang-menu">
            ${optionsHtml}
        </div>
    </div>
    `;
}

function toggleLangDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}

function selectLanguage(lang) {
    changeLanguage(lang);
    updateDropdownDisplay(lang);
    toggleLangDropdown();
}

function updateDropdownDisplay(lang) {
    const langData = availableLanguages[lang];
    if (langData) {
        const flagEl = document.getElementById('current-flag');
        const langEl = document.getElementById('current-lang');
        if (flagEl) flagEl.textContent = langData.flag;
        if (langEl) langEl.textContent = lang.toUpperCase();
    }
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
    }
});
