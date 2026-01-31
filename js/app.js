// js/app.js
// Main application logic for Yucast

// =============================================
// CONFIGURATION
// =============================================
const CONFIG = {
    emailjs: {
        publicKey: 'AlcXNClkk7JrUAF-y',
        serviceId: 'service_9nkxilk',
        templateId: 'template_c08wjnn'
    },
    toast: {
        duration: 5000
    }
};

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initEmailJS();
    setupNavbar();
    setupContactForm();
    setupContactReveal();
});

/**
 * Initialize EmailJS
 */
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(CONFIG.emailjs.publicKey);
    }
}

// =============================================
// NAVBAR
// =============================================

/**
 * Setup navbar scroll effect
 */
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    // Initial check
    updateNavbarState(navbar);
    
    // Scroll listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbarState(navbar);
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Update navbar state based on scroll position
 */
function updateNavbarState(navbar) {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// =============================================
// TOAST NOTIFICATIONS
// =============================================

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    
    if (!toast || !toastMessage || !toastIcon) return;
    
    // Set message
    toastMessage.textContent = message;
    
    // Set style based on type
    const isSuccess = type === 'success';
    const bgColor = isSuccess ? 'bg-green-500/20' : 'bg-red-500/20';
    const borderColor = isSuccess ? 'border-green-500/30' : 'border-red-500/30';
    const iconColor = isSuccess ? 'text-green-400' : 'text-red-400';
    const iconPath = isSuccess 
        ? 'M5 13l4 4L19 7' 
        : 'M6 18L18 6M6 6l12 12';
    
    toast.className = `toast fixed top-6 right-6 z-[100] px-6 py-4 rounded-xl shadow-2xl ${bgColor} border ${borderColor} backdrop-blur-xl`;
    toastIcon.innerHTML = `
        <svg class="w-5 h-5 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}"/>
        </svg>
    `;
    
    // Show toast
    toast.classList.remove('hidden');
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Auto-hide after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, CONFIG.toast.duration);
}

// =============================================
// CONTACT FORM
// =============================================

/**
 * Setup contact form submission
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
}

/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    
    // Disable button and show loading
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
    
    try {
        // Send email via EmailJS
        await emailjs.sendForm(
            CONFIG.emailjs.serviceId, 
            CONFIG.emailjs.templateId, 
            form
        );
        
        showToast('Message sent successfully!', 'success');
        form.reset();
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        showToast('Failed to send message. Please try again.', 'error');
        
    } finally {
        // Re-enable button
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.classList.remove('hidden');
        if (btnLoading) btnLoading.classList.add('hidden');
    }
}

// =============================================
// CONTACT SECTION REVEAL
// =============================================

/**
 * Setup contact section reveal on button click
 */
function setupContactReveal() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Check if coming from another page with showContact param
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    
    if (urlParams.get('showContact') === 'true' || hash === '#contact') {
        // Show contact section immediately
        contactSection.classList.remove('hidden-section');
        contactSection.classList.add('visible');
        
        // Scroll to it after a small delay
        setTimeout(() => {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Clean up the URL
            if (urlParams.get('showContact')) {
                window.history.replaceState({}, '', window.location.pathname + '#contact');
            }
        }, 100);
    }
    
    // Get all links that point to #contact
    const contactLinks = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Show the contact section
            contactSection.classList.remove('hidden-section');
            contactSection.classList.add('visible');
            
            // Scroll to it smoothly
            setTimeout(() => {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 50);
        });
    });
}

// =============================================
// SMOOTH SCROLL (for anchor links)
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});