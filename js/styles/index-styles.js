// js/styles/index-styles.js
// Style tokens specific to index.html (homepage)

const INDEX_STYLES = {

    // =============================================
    // HERO SECTION
    // =============================================
    HERO_SECTION: "hero-section",
    HERO_CONTENT: "hero-content",
    HERO_TITLE: "hero-title animate-fade-in-up delay-100",
    HERO_TITLE_GRADIENT: "block text-gradient",
    HERO_SUBTITLE: "hero-subtitle animate-fade-in-up delay-200",

    // =============================================
    // STATUS BADGE
    // =============================================
    STATUS_BADGE: "status-badge glass animate-fade-in-up",
    STATUS_DOT_CONTAINER: "status-dot-container",
    STATUS_DOT_PING: "status-dot-ping",
    STATUS_DOT: "status-dot",
    STATUS_TEXT: "status-text",

    // =============================================
    // CTA SECTION
    // =============================================
    CTA_CONTAINER: "cta-container animate-fade-in-up delay-300",

    // =============================================
    // DEMO SECTION
    // =============================================
    DEMO_CONTAINER: "demo-container",
    DEMO_BOX: "demo-box",
    DEMO_GRADIENT: "absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent",

    // =============================================
    // FEATURES SECTION
    // =============================================
    FEATURES_SECTION: "features-section",
    FEATURES_GRID: "features-grid",
    FEATURE_CARD: "card-hover group relative p-8 rounded-2xl glass",
    FEATURE_CARD_HOVER_BG: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
    FEATURE_CARD_CONTENT: "relative z-10",
    FEATURE_ICON_BOX: "w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
    FEATURE_ICON: "text-2xl",
    FEATURE_TITLE: "text-xl font-bold text-white mb-3 tracking-tight",
    FEATURE_DESC: "text-gray-400 leading-relaxed text-sm",

    // =============================================
    // ARCHITECTURE SECTION
    // =============================================
    ARCHITECTURE_SECTION: "architecture-section",
    ARCHITECTURE_GRID: "architecture-grid",
    ARCH_CARD: "glass rounded-2xl p-8",
    ARCH_TITLE: "text-xl font-bold text-white mb-6 flex items-center gap-3",
    ARCH_ICON_BACKEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-lg shadow-inner",
    ARCH_ICON_FRONTEND: "w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-lg shadow-inner",
    STACK_LIST: "space-y-4",
    STACK_ITEM: "flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors",
    STACK_ICON_SB: "w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-sm shadow-sm",
    STACK_ICON_K: "w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-400 font-bold text-sm shadow-sm",
    STACK_ICON_WS: "w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm shadow-sm",
    STACK_ICON_R: "w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm shadow-sm",
    STACK_ICON_RF: "w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm shadow-sm",
    STACK_ICON_TW: "w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold text-sm shadow-sm",
    STACK_NAME: "font-semibold text-white text-sm",
    STACK_DESC: "text-xs text-gray-500 mt-0.5",

    // =============================================
    // CONTACT SECTION
    // =============================================
    CONTACT_SECTION: "contact-section hidden-section",
    CONTACT_FORM_CONTAINER: "contact-form-container",
    CONTACT_FORM: "contact-form glass",
    FORM_INPUT: "form-input input-focus",
    SUBMIT_BUTTON: "submit-button btn-glow",
    SUBMIT_TEXT: "",
    SUBMIT_LOADING: "hidden"
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = INDEX_STYLES;
}