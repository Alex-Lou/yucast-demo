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

    updateNavbar();

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

const TOAST_DURATION = 5000;

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastMessage || !toastIcon) return;

    toastMessage.textContent = message;

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

    toast.classList.remove('hidden');
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, TOAST_DURATION);
}

function setupContactLinks() {
    const contactLinks = document.querySelectorAll('a[href="index.html#contact"]');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html?showContact=true#contact';
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;

            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 100;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setupNavbar, showToast, setupContactLinks, setupSmoothScroll };
}
