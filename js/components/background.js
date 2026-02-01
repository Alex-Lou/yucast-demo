// js/components/background.js
// Background and particles component

function renderBackground() {
    return `
    <div class="[BG_CONTAINER]">
        <div class="[BG_OVERLAY]"></div>
        <div class="[BG_GLOW_PURPLE]"></div>
        <div class="[BG_GLOW_CYAN]"></div>
        <div class="[BG_GLOW_INDIGO]"></div>
        <div class="[GRID_OVERLAY]"></div>
    </div>
    `;
}

function renderParticles(config = 'default') {
    const particles = {
        default: [
            { size: 'MD', left: '10%', top: '20%', delay: '0s' },
            { size: 'SM', left: '85%', top: '15%', delay: '0.5s' },
            { size: 'LG', left: '75%', top: '75%', delay: '1s' },
            { size: 'SM', left: '15%', top: '70%', delay: '1.5s' },
            { size: 'MD', left: '5%', top: '45%', delay: '1.2s' }
        ],
        pricing: [
            { size: 'MD', left: '10%', top: '20%', delay: '0s' },
            { size: 'SM', left: '80%', top: '30%', delay: '1s' },
            { size: 'LG', left: '70%', top: '70%', delay: '2s' }
        ]
    };

    const selectedParticles = particles[config] || particles.default;

    const particlesHtml = selectedParticles.map((p, i) => {
        const className = `[PARTICLE_${p.size}]`;
        const isFirst = i === 0 ? ' particle-1' : '';
        return `<div class="${className}${isFirst}" style="left: ${p.left}; top: ${p.top}; animation-delay: ${p.delay};"></div>`;
    }).join('');

    return `
    <div class="[PARTICLES_CONTAINER]">
        ${particlesHtml}
    </div>
    `;
}

function renderToast() {
    return `
    <div id="toast" class="[TOAST_CONTAINER]">
        <div class="[TOAST_CONTENT]">
            <span id="toast-icon"></span>
            <span id="toast-message" class="[TOAST_MESSAGE]"></span>
        </div>
    </div>
    `;
}

function injectBackground(particleConfig = 'default') {
    const container = document.getElementById('background-container');
    if (container) {
        container.innerHTML = renderToast() + renderBackground() + renderParticles(particleConfig);
    }
}