// js/core/utils.js
// Shared utility functions for all pages

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================

/**
 * Setup navbar scroll effect - adds/removes scrolled class
 */
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    // Initial check
    updateNavbar();

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =============================================
// TOAST NOTIFICATIONS
// =============================================

const TOAST_DURATION = 5000;

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

    // Auto-hide
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, TOAST_DURATION);
}

// =============================================
// CONTACT LINKS HANDLER
// =============================================

/**
 * Setup contact links to pass showContact parameter
 * Used on pages that link to index.html#contact
 */
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
// SMOOTH SCROLL
// =============================================

/**
 * Setup smooth scroll for anchor links
 */
function setupSmoothScroll() {
    // On cible tous les liens qui contiennent un '#'
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // 1. Récupérer l'ID de la cible (ex: "features")
            const href = this.getAttribute('href');
            
            // Si le lien est juste "#" (haut de page), on laisse faire
            if (href === '#') return;

            // On extrait l'ID après le # (utile si le lien est "index.html#features")
            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault(); // On bloque le saut brutal par défaut

                // 2. CONFIGURATION DU DÉCALAGE (C'est ici que tu règles ton problème)
                // 100px est une bonne moyenne (80px de navbar + 20px d'espace)
                // Si ça cache encore un peu, augmente ce chiffre (ex: 120)
                const headerOffset = 100; 
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // 3. Le scroll fluide
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setupNavbar, showToast, setupContactLinks, setupSmoothScroll };
}