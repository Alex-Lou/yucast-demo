// js/pages/pricing.js

// =============================================
// PRICING CONFIGURATION
// =============================================
const PRICES = {
    pro: {
        monthly: 49,
        yearly: 39  // 20% discount
    }
};

let isYearly = false;

// =============================================
// BILLING TOGGLE
// =============================================

/**
 * Toggle between monthly and yearly billing
 */
function toggleBilling() {
    isYearly = !isYearly;

    const toggle = document.getElementById('billing-toggle');
    const knob = document.getElementById('toggle-knob');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    const proPrice = document.getElementById('pro-price');
    const proPeriod = document.getElementById('pro-period');

    if (isYearly) {
        knob.style.transform = 'translateX(24px)';
        toggle.classList.add('active');
        monthlyLabel.classList.remove('active');
        yearlyLabel.classList.add('active');
        proPrice.textContent = PRICES.pro.yearly;
        proPeriod.textContent = 'month, billed yearly';
    } else {
        knob.style.transform = 'translateX(0)';
        toggle.classList.remove('active');
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
        proPrice.textContent = PRICES.pro.monthly;
        proPeriod.textContent = 'month';
    }

    // Animate price change
    proPrice.classList.add('price-change');
    setTimeout(() => proPrice.classList.remove('price-change'), 300);
}

// =============================================
// FAQ ACCORDION
// =============================================

/**
 * Toggle FAQ item open/close
 * @param {HTMLElement} button - The clicked FAQ question button
 */
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    const isOpen = faqItem.classList.contains('open');

    // Close all other FAQs
    document.querySelectorAll('.faq-item.open').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('open');
            item.querySelector('.faq-answer').style.maxHeight = '0';
            item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current FAQ
    if (isOpen) {
        faqItem.classList.remove('open');
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        faqItem.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

// =============================================
// INITIALIZATION
// =============================================

/**
 * Initialize pricing page
 */
function initPricingPage() {
    // Hydrate styles (SHARED + PRICING combined)
    const combinedStyles = { ...SHARED_STYLES, ...PRICING_STYLES };
    hydrateStyles(combinedStyles);

    // Setup core utilities
    setupNavbar();
    setupContactLinks();

    // Initialize FAQ answers to closed state
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.maxHeight = '0';
    });

}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initPricingPage);