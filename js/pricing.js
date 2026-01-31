// js/pricing.js
// Pricing page logic with style hydration

// =============================================
// STYLE HYDRATION
// =============================================

/**
 * Hydrates all [TOKEN] placeholders in the DOM with actual style values
 * Must be called after PRICING_STYLES is loaded
 */
function hydrateStyles() {
    if (typeof PRICING_STYLES === 'undefined') {
        console.error('PRICING_STYLES not loaded!');
        return;
    }

    // Get all elements in the document
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(el => {
        // Hydrate class attributes (handle both HTML and SVG elements)
        let classValue = el.getAttribute('class');
        if (classValue && classValue.includes('[')) {
            const newClass = classValue.replace(/\[([A-Z_]+)\]/g, (match, key) => {
                return PRICING_STYLES[key] || match;
            });
            el.setAttribute('class', newClass);
        }
        
        // Hydrate SVG path 'd' attributes
        if (el.tagName === 'path' && el.hasAttribute('d')) {
            const d = el.getAttribute('d');
            if (d && d.includes('[')) {
                el.setAttribute('d', d.replace(/\[([A-Z_]+)\]/g, (match, key) => {
                    return PRICING_STYLES[key] || match;
                }));
            }
        }
    });
    
    console.log('Styles hydrated successfully!');
}

// =============================================
// BILLING TOGGLE (Monthly / Yearly)
// =============================================
let isYearly = false;

const PRICES = {
    pro: {
        monthly: 49,
        yearly: 39  // 20% discount
    }
};

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
// NAVBAR SCROLL EFFECT
// =============================================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// =============================================
// CONTACT LINKS (redirect with hash parameter)
// =============================================
function setupContactLinks() {
    const contactLinks = document.querySelectorAll('a[href="index.html#contact"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html?showContact=true#contact';
        });
    });
}

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hydrate styles FIRST (before anything else)
    hydrateStyles();
    
    // 2. Setup functionality
    setupNavbar();
    setupContactLinks();
    
    // 3. Initialize FAQ answers to closed state
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.maxHeight = '0';
    });
});