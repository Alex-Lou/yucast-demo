// js/pages/pricing.js
// Page logic for pricing.html

// =============================================
// PRICING DATA
// =============================================
const pricingPlans = [
    {
        id: 'starter',
        icon: '🚀',
        nameKey: 'plan_starter',
        descKey: 'plan_starter_desc',
        priceKey: 'price_free',
        periodKey: 'price_forever',
        price: { monthly: 0, yearly: 0 },
        iconClass: 'PLAN_ICON_STARTER',
        btnClass: 'PLAN_BTN_STARTER',
        btnKey: 'btn_start_free',
        cardClass: 'PRICING_CARD',
        features: [
            { key: 'starter_f1', enabled: true },
            { key: 'starter_f2', enabled: true },
            { key: 'starter_f3', enabled: true },
            { key: 'feature_visualization', enabled: true },
            { key: 'feature_support_community', enabled: true },
            { key: 'feature_alerting', enabled: false },
            { key: 'feature_export', enabled: false }
        ]
    },
    {
        id: 'pro',
        icon: '⚡',
        nameKey: 'plan_pro',
        descKey: 'plan_pro_desc',
        price: { monthly: 49, yearly: 39 },
        iconClass: 'PLAN_ICON_PRO',
        btnClass: 'PLAN_BTN_PRO',
        btnKey: 'btn_trial',
        cardClass: 'PRICING_CARD_FEATURED',
        popular: true,
        features: [
            { key: 'pro_f1', enabled: true },
            { key: 'pro_f2', enabled: true },
            { key: 'pro_f3', enabled: true },
            { key: 'pro_f4', enabled: true },
            { key: 'pro_f5', enabled: true },
            { key: 'feature_alerting_advanced', enabled: true },
            { key: 'feature_export_csv', enabled: true }
        ]
    },
    {
        id: 'enterprise',
        icon: '🏢',
        nameKey: 'plan_enterprise',
        descKey: 'plan_enterprise_desc',
        priceKey: 'price_custom',
        periodKey: 'price_pricing',
        iconClass: 'PLAN_ICON_ENTERPRISE',
        btnClass: 'PLAN_BTN_ENTERPRISE',
        btnKey: 'btn_contact_sales',
        cardClass: 'PRICING_CARD_ENTERPRISE',
        features: [
            { key: 'enterprise_f1', enabled: true },
            { key: 'enterprise_f2', enabled: true },
            { key: 'enterprise_f3', enabled: true },
            { key: 'enterprise_f4', enabled: true },
            { key: 'enterprise_f5', enabled: true },
            { key: 'feature_sso', enabled: true },
            { key: 'feature_onpremise', enabled: true },
            { key: 'feature_api', enabled: true }
        ]
    }
];

// =============================================
// FAQ DATA
// =============================================
const faqData = [
    { qKey: 'faq_q1', aKey: 'faq_a1' },
    { qKey: 'faq_q2', aKey: 'faq_a2' },
    { qKey: 'faq_q3', aKey: 'faq_a3' },
    { qKey: 'faq_q4', aKey: 'faq_a4' },
    { qKey: 'faq_q5', aKey: 'faq_a5' }
];

// =============================================
// STATE
// =============================================
let isYearly = false;

// =============================================
// INTERNAL GENERATION FUNCTION (HTML ONLY)
// =============================================

// Cette fonction génère uniquement le HTML sans appliquer le style
// Renommée avec un "_" pour éviter la confusion avec la fonction principale
function _generatePricingHTML() {
    const container = document.getElementById('pricing-grid');
    if (!container) return;

    container.innerHTML = pricingPlans.map(plan => {
        const popularBadge = plan.popular 
            ? `<div class="[POPULAR_BADGE]" data-i18n="popular_badge">${getTranslation('popular_badge')}</div>` 
            : '';

        let priceHtml;
        if (plan.priceKey) {
            priceHtml = `
                <span class="[PRICE_AMOUNT]" data-i18n="${plan.priceKey}">${getTranslation(plan.priceKey)}</span>
                <span class="[PRICE_PERIOD]" data-i18n="${plan.periodKey}">${getTranslation(plan.periodKey)}</span>
            `;
        } else {
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            const periodKey = isYearly ? 'price_year' : 'price_month';
            priceHtml = `
                <span class="[PRICE_CURRENCY]">€</span>
                <span class="[PRICE_AMOUNT]" id="${plan.id}-price">${price}</span>
                <span class="[PRICE_PERIOD]">/ <span data-i18n="${periodKey}">${getTranslation(periodKey)}</span></span>
            `;
        }

        const featuresHtml = plan.features.map(f => {
            const itemClass = f.enabled ? '[FEATURE_ITEM]' : '[FEATURE_ITEM_DISABLED]';
            const iconSvg = f.enabled 
                ? `<svg class="[FEATURE_CHECK]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
                : `<svg class="[FEATURE_X]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
            
            return `
                <li class="${itemClass}">
                    ${iconSvg}
                    <span data-i18n="${f.key}">${getTranslation(f.key)}</span>
                </li>
            `;
        }).join('');

        return `
            <div class="[${plan.cardClass}]">
                ${popularBadge}
                <div class="[CARD_HEADER]">
                    <div class="[${plan.iconClass}]"><span>${plan.icon}</span></div>
                    <h3 class="[PLAN_NAME]" data-i18n="${plan.nameKey}">${getTranslation(plan.nameKey)}</h3>
                    <p class="[PLAN_DESCRIPTION]" data-i18n="${plan.descKey}">${getTranslation(plan.descKey)}</p>
                </div>
                <div class="[PRICE_CONTAINER]">${priceHtml}</div>
                <ul class="[FEATURES_LIST]">${featuresHtml}</ul>
                <a href="index.html#contact" class="[${plan.btnClass}]" data-i18n="${plan.btnKey}">${getTranslation(plan.btnKey)}</a>
            </div>
        `;
    }).join('');
}

// =============================================
// PUBLIC RENDER & LOGIC
// =============================================

// C'est la fonction principale à utiliser. Elle fait HTML + CSS.
function renderPricingCards() {
    // 1. Générer le HTML
    _generatePricingHTML();
    
    // 2. Appliquer les styles dynamiquement
    const combinedStyles = { ...SHARED_STYLES, ...PRICING_STYLES };
    hydrateStyles(combinedStyles);
}

// Rendre la fonction accessible globalement (pour i18n.js)
window.renderPricingCards = renderPricingCards;

function renderFaq() {
    const container = document.getElementById('faq-list');
    if (!container) return;

    container.innerHTML = faqData.map(faq => `
        <div class="[FAQ_ITEM]">
            <button class="[FAQ_QUESTION]" onclick="toggleFaq(this)">
                <span data-i18n="${faq.qKey}">${getTranslation(faq.qKey)}</span>
                <svg class="[FAQ_ICON]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <div class="[FAQ_ANSWER]">
                <p data-i18n="${faq.aKey}">${getTranslation(faq.aKey)}</p>
            </div>
        </div>
    `).join('');
}

function toggleBilling() {
    isYearly = !isYearly;
    
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    const toggleKnob = document.getElementById('toggle-knob');

    if (isYearly) {
        monthlyLabel?.classList.remove('[BILLING_LABEL_ACTIVE]');
        monthlyLabel?.classList.add('[BILLING_LABEL]');
        yearlyLabel?.classList.remove('[BILLING_LABEL]');
        yearlyLabel?.classList.add('[BILLING_LABEL_ACTIVE]');
        toggleKnob?.classList.add('translate-x-6');
    } else {
        monthlyLabel?.classList.remove('[BILLING_LABEL]');
        monthlyLabel?.classList.add('[BILLING_LABEL_ACTIVE]');
        yearlyLabel?.classList.remove('[BILLING_LABEL_ACTIVE]');
        yearlyLabel?.classList.add('[BILLING_LABEL]');
        toggleKnob?.classList.remove('translate-x-6');
    }

    // Mise à jour de la vue et des styles
    renderPricingCards();
}

function toggleFaq(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('[class*="FAQ_ANSWER"]');
    const icon = button.querySelector('svg');

    faqItem.classList.toggle('open');
    
    if (faqItem.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// =============================================
// INITIALIZATION
// =============================================

function initPricingPage() {
    // 1. Injecter les composants de base
    injectBackground('pricing');
    injectNavbar('pricing');
    injectFooter();

    setupNavbar();
    setupSmoothScroll();

    renderPricingCards();
    renderFaq();
    
    const combinedStyles = { ...SHARED_STYLES, ...PRICING_STYLES };
    hydrateStyles(combinedStyles);

    document.body.classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', initPricingPage);