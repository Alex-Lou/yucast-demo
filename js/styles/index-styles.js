const INDEX_STYLES = {

    HERO_SECTION: "hero-section",
    HERO_CONTENT: "hero-content",
    HERO_TITLE: "hero-title animate-fade-in-up delay-100",
    HERO_TITLE_GRADIENT: "block text-gradient",
    HERO_SUBTITLE: "hero-subtitle animate-fade-in-up delay-200",

    STATUS_BADGE: "status-badge glass animate-fade-in-up",
    STATUS_DOT_CONTAINER: "status-dot-container",
    STATUS_DOT_PING: "status-dot-ping",
    STATUS_DOT: "status-dot",
    STATUS_TEXT: "status-text",

    CTA_CONTAINER: "cta-container animate-fade-in-up delay-300",

    DEMO_CONTAINER: "demo-container",
    DEMO_BOX: "demo-box",
    DEMO_GRADIENT: "absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent",

    FEATURES_SECTION: "features-section",
    FEATURES_GRID: "features-grid",
    FEATURE_CARD: "card-hover group relative p-8 rounded-2xl glass",
    FEATURE_CARD_HOVER_BG: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
    FEATURE_CARD_CONTENT: "relative z-10",
    FEATURE_ICON_BOX: "w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
    FEATURE_ICON: "text-2xl",
    FEATURE_TITLE: "text-xl font-bold text-white mb-3 tracking-tight",
    FEATURE_DESC: "text-gray-400 leading-relaxed text-sm",

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

    CONTACT_SECTION: "contact-section hidden-section",
    CONTACT_FORM_CONTAINER: "contact-form-container",
    CONTACT_FORM: "contact-form glass",
    FORM_INPUT: "form-input input-focus",
    SUBMIT_BUTTON: "submit-button btn-glow",
    SUBMIT_TEXT: "",
    SUBMIT_LOADING: "hidden",

    AURORA_CONTAINER: "aurora-container",
    AURORA_BLOB: "aurora-blob",
    BLOB_CYAN: "blob-cyan",
    BLOB_PURPLE: "blob-purple",
    BLOB_PINK: "blob-pink",

    DEMO_CONTAINER: "demo-container w-full max-w-5xl mx-auto px-6",
    DEMO_BOX: "demo-box",

    MODAL_OVERLAY: "modal-overlay hidden",
    MODAL_CONTENT: "modal-content glass",
    MODAL_HEADER: "modal-header flex justify-between items-center mb-6",
    MODAL_TITLE: "text-xl font-bold text-white",
    MODAL_BODY: "modal-body",
    MODAL_FOOTER: "modal-footer mt-6 flex justify-end gap-3",
    
    FORM_GROUP: "form-group mb-4",
    INPUT_LABEL: "text-xs uppercase tracking-wider text-gray-500 mb-1 block",
    FORM_INPUT: "form-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors",
    GRID_2_COL: "grid grid-cols-2 gap-4",
    
    BTN_CANCEL: "px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 transition-colors",
    BTN_DEPLOY: "px-6 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all",

    HERO_SECTION: "hero-section relative min-h-screen flex items-center justify-center pt-20",
    HERO_CONTENT: "hero-content text-center z-10 max-w-4xl mx-auto px-4",
    STATUS_BADGE: "status-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8",
    STATUS_DOT_CONTAINER: "relative flex h-2 w-2",
    STATUS_DOT_PING: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75",
    STATUS_DOT: "relative inline-flex rounded-full h-2 w-2 bg-green-500",
    STATUS_TEXT: "text-sm text-gray-400 font-medium",
    
    HERO_TITLE: "hero-title text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight",
    HERO_TITLE_GRADIENT: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient",
    HERO_SUBTITLE: "hero-subtitle text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed",
    
    CTA_CONTAINER: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
    MAIN_CTA: "cta-button px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1",
    SECONDARY_CTA: "px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm",

    FEATURES_SECTION: "features-section py-24 relative",
    FEATURES_GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    
    ARCHITECTURE_SECTION: "architecture-section py-24 relative bg-black/20",
    ARCHITECTURE_GRID: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
    
    CONTACT_SECTION: "contact-section py-24 relative",
    CONTACT_FORM_CONTAINER: "max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md",
    CONTACT_FORM: "space-y-6",
    SUBMIT_BUTTON: "w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
    
    SECTION_HEADER: "text-center mb-16",
    SECTION_TITLE: "text-3xl md:text-4xl font-bold text-white mb-4",
    SECTION_SUBTITLE: "text-gray-400 max-w-2xl mx-auto",
    TEXT_GRADIENT: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = INDEX_STYLES;
}
