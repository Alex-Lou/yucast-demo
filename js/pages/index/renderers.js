function renderFeatures() {
    const container = document.getElementById('features-grid');
    if (!container) return;

    container.innerHTML = featuresData.map((feature, index) => `
        <div class="card-hover group relative p-8 rounded-2xl glass animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">${feature.icon}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight" data-i18n="${feature.titleKey}">${getTranslation(feature.titleKey)}</h3>
                <p class="text-gray-400 leading-relaxed text-sm" data-i18n="${feature.descKey}">${getTranslation(feature.descKey)}</p>
            </div>
        </div>
    `).join('');
}

function renderArchitecture() {
    const container = document.getElementById('architecture-grid');
    if (!container) return;

    container.innerHTML = architectureData.map((stack, index) => `
        <div class="glass rounded-2xl p-8 animate-fade-in-up" style="animation-delay: ${index * 150}ms">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="${ARCHITECTURE_ICON_CLASSES[stack.iconClass]}">${stack.mainIcon}</span>
                <span data-i18n="${stack.titleKey}">${getTranslation(stack.titleKey)}</span>
            </h3>
            <div class="space-y-4">
                ${stack.items.map(item => `
                    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <div class="${ARCHITECTURE_ICON_CLASSES[item.iconClass]}">${item.abbr}</div>
                        <div>
                            <div class="font-semibold text-white text-sm" data-i18n="${item.nameKey}">${getTranslation(item.nameKey)}</div>
                            <div class="text-xs text-gray-500 mt-0.5" data-i18n="${item.descKey}">${getTranslation(item.descKey)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}
