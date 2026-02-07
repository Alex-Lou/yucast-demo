function getQueryParam(name) {
    const query = window.location.search || '';
    if (!query || query.length < 2) return null;

    const pairs = query.substring(1).split('&');
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        if (!pair) continue;
        const eq = pair.indexOf('=');
        const rawKey = eq >= 0 ? pair.substring(0, eq) : pair;
        if (decodeURIComponent(rawKey) !== name) continue;
        const rawVal = eq >= 0 ? pair.substring(eq + 1) : '';
        try {
            return decodeURIComponent(rawVal.replace(/\+/g, ' '));
        } catch (e) {
            return rawVal;
        }
    }
    return null;
}

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

    const hash = window.location.hash;

    const showContact = getQueryParam('showContact');
    if (showContact === 'true' || hash === '#contact') {
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
