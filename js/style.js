const STYLES = {
    // --- Layout Global ---
    S_BODY: "bg-[#0a0a0f] text-white overflow-x-hidden",
    S_BG_OVERLAY: "fixed inset-0 -z-10 overflow-hidden",
    S_BG_SOLID: "absolute inset-0 bg-[#0a0a0f]",
    S_BLUR_PURPLE: "absolute top-0 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[128px] animate-pulse",
    S_BLUR_CYAN: "absolute bottom-0 -right-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[128px] animate-pulse",
    S_BLUR_INDIGO: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[128px] animate-pulse",
    S_GRID_PATTERN: "absolute inset-0 opacity-[0.03]",
    S_PARTICLES_CONTAINER: "fixed inset-0 -z-5 pointer-events-none overflow-hidden",

    // --- Navigation ---
    S_NAV: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    S_NAV_CONTAINER: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
    S_LOGO_BOX: "w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center animate-glow-pulse",
    S_NAV_LINK: "text-gray-400 hover:text-white transition-colors text-sm",
    S_BTN_NAV: "btn-glow relative px-5 py-2 rounded-xl font-semibold text-xs tracking-wide bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300",

    // --- Sections Communes ---
    S_SECTION_HERO: "relative min-h-screen flex items-center justify-center px-6 pt-20",
    S_SECTION_STD: "py-24 px-6",
    S_SECTION_BORDER: "py-24 px-6 border-t border-white/[0.05]",
    S_SECTION_STATS: "py-20 px-6 border-y border-white/[0.05]",
    
    // --- Typography & Badges ---
    S_BADGE_GLASS: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up",
    S_H1: "text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up",
    S_H2: "text-4xl font-black mb-4",
    S_P_HERO: "text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up",
    S_P_STD: "text-gray-400 max-w-2xl mx-auto",
    S_TEXT_GRADIENT: "text-gradient",

    // --- Buttons ---
    S_BTN_HERO: "btn-glow relative px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300",

    // --- Demo / Visualizer ---
    S_DEMO_WRAPPER: "animate-fade-in-up",
    S_DEMO_BOX: "relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#0d0d12] shadow-2xl shadow-purple-500/10",
    S_DEMO_GRADIENT: "absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent",

    // --- Features Cards ---
    S_GRID_3: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
    S_CARD_GLASS: "card-hover group relative p-8 rounded-2xl glass",
    S_CARD_HOVER_BG: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
    S_ICON_BOX: "w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",

    // --- Architecture (Les styles spécifiques que j'avais cassés) ---
    S_GRID_2: "grid md:grid-cols-2 gap-8",
    S_ARCH_CARD: "glass rounded-2xl p-8",
    S_ARCH_TITLE: "text-xl font-bold text-white mb-6 flex items-center gap-3",
    // Backend (Orange/Red)
    S_ICON_BACKEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center", 
    // Frontend (Cyan/Blue)
    S_ICON_FRONTEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center",
    
    // Stack Items
    S_STACK_ITEM: "flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]",
    S_STACK_ICON_SB: "w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 font-bold",
    S_STACK_ICON_K: "w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-400 font-bold",
    S_STACK_ICON_WS: "w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold",
    S_STACK_ICON_R: "w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold",
    S_STACK_ICON_RF: "w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold",
    S_STACK_ICON_TW: "w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold",

    // --- Contact Form ---
    S_FORM_CONTAINER: "max-w-xl mx-auto",
    S_INPUT: "input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none transition-all",
    S_BTN_FULL: "w-full btn-glow relative px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",

    // --- Footer ---
    S_FOOTER: "py-12 px-6 border-t border-white/[0.05]",
    S_FOOTER_CONTAINER: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
};