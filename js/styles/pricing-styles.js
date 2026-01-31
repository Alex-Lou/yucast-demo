// js/styles/pricing-styles.js
// Style tokens for Pricing page - Option A (Component-based)

const PRICING_STYLES = {
    
    // =============================================
    // LAYOUT & CONTAINERS
    // =============================================
    PAGE_BODY: "page-body",
    CONTAINER_SM: "max-w-3xl mx-auto",
    CONTAINER_MD: "max-w-4xl mx-auto text-center",
    CONTAINER_LG: "max-w-6xl mx-auto",
    FLEX_CENTER: "flex items-center gap-3",
    FLEX_BETWEEN: "flex items-center justify-between",
    FLEX_COL_CENTER: "flex flex-col md:flex-row items-center justify-between gap-6",
    
    // =============================================
    // TOAST
    // =============================================
    TOAST_CONTAINER: "toast fixed top-6 right-6 z-[100] px-6 py-4 rounded-xl shadow-2xl hidden",
    TOAST_CONTENT: "flex items-center gap-3",
    TOAST_MESSAGE: "font-medium",
    
    // =============================================
    // BACKGROUND & PARTICLES
    // =============================================
    BG_CONTAINER: "background-container",
    BG_OVERLAY: "background-overlay",
    BG_GLOW_PURPLE: "background-glow glow-purple",
    BG_GLOW_CYAN: "background-glow glow-cyan",
    BG_GLOW_INDIGO: "background-glow glow-indigo",
    GRID_OVERLAY: "grid-overlay grid-pattern",
    
    PARTICLES_CONTAINER: "fixed inset-0 -z-5 pointer-events-none overflow-hidden",
    PARTICLE_1: "absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 animate-float particle-1",
    PARTICLE_2: "absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-50 animate-float",
    PARTICLE_3: "absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 animate-float",
    
    // =============================================
    // NAVIGATION
    // =============================================
    NAVBAR: "navbar",
    NAVBAR_CONTAINER: "navbar-container",
    LOGO_CONTAINER: "logo-container",
    LOGO_ICON: "logo-icon",
    LOGO_ICON_TEXT: "text-white font-black text-lg",
    LOGO_TEXT: "logo-text",
    NAV_LINKS: "nav-links",
    NAV_LINK: "nav-link",
    NAV_LINK_ACTIVE: "nav-link nav-link-active",
    NAV_CTA_CONTAINER: "flex items-center gap-4",
    CTA_BUTTON: "cta-button btn-glow",
    
    // =============================================
    // PRICING HERO
    // =============================================
    PRICING_HERO: "pricing-hero",
    STATUS_BADGE: "status-badge glass animate-fade-in-up",
    STATUS_BADGE_TEXT: "text-sm text-gray-300",
    PRICING_TITLE: "pricing-title animate-fade-in-up delay-100",
    PRICING_TITLE_GRADIENT: "block text-gradient",
    PRICING_SUBTITLE: "pricing-subtitle animate-fade-in-up delay-200",
    
    // =============================================
    // BILLING TOGGLE
    // =============================================
    BILLING_TOGGLE: "billing-toggle animate-fade-in-up delay-300",
    BILLING_LABEL: "billing-label",
    BILLING_LABEL_ACTIVE: "billing-label active",
    TOGGLE_SWITCH: "toggle-switch",
    TOGGLE_KNOB: "toggle-knob",
    SAVE_BADGE: "save-badge",
    
    // =============================================
    // PRICING SECTION & GRID
    // =============================================
    PRICING_SECTION: "pricing-section",
    PRICING_GRID: "pricing-grid",
    
    // =============================================
    // PRICING CARDS
    // =============================================
    PRICING_CARD: "pricing-card glass animate-fade-in-up delay-200",
    PRICING_CARD_FEATURED: "pricing-card pricing-card-featured glass animate-fade-in-up delay-300",
    PRICING_CARD_ENTERPRISE: "pricing-card glass animate-fade-in-up delay-400",
    POPULAR_BADGE: "popular-badge",
    
    // Card Header
    CARD_HEADER: "card-header",
    PLAN_ICON_STARTER: "plan-icon starter-icon",
    PLAN_ICON_PRO: "plan-icon pro-icon",
    PLAN_ICON_ENTERPRISE: "plan-icon enterprise-icon",
    PLAN_NAME: "plan-name",
    PLAN_DESCRIPTION: "plan-description",
    
    // Price Display
    PRICE_CONTAINER: "price-container",
    PRICE_CURRENCY: "price-currency",
    PRICE_AMOUNT: "price-amount",
    PRICE_PERIOD: "price-period",
    
    // Features List
    FEATURES_LIST: "features-list",
    FEATURE_ITEM: "feature-item",
    FEATURE_ITEM_DISABLED: "feature-item disabled",
    FEATURE_CHECK: "feature-check",
    FEATURE_X: "feature-x",
    
    // Plan Buttons
    PLAN_BUTTON_STARTER: "plan-button starter-button",
    PLAN_BUTTON_PRO: "plan-button pro-button btn-glow",
    PLAN_BUTTON_ENTERPRISE: "plan-button enterprise-button",
    
    // =============================================
    // FAQ SECTION
    // =============================================
    FAQ_SECTION: "faq-section",
    SECTION_HEADER: "section-header",
    SECTION_TITLE: "section-title",
    TEXT_GRADIENT: "text-gradient",
    FAQ_LIST: "faq-list",
    FAQ_ITEM: "faq-item glass",
    FAQ_QUESTION: "faq-question",
    FAQ_ICON: "faq-icon",
    FAQ_ANSWER: "faq-answer",
    
    // =============================================
    // CTA SECTION
    // =============================================
    CTA_SECTION: "cta-section",
    CTA_BOX: "cta-box glass",
    CTA_BOX_GLOW: "absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 blur-3xl",
    CTA_BOX_CONTENT: "relative z-10",
    CTA_TITLE: "text-3xl sm:text-4xl font-black mb-4",
    CTA_SUBTITLE: "text-gray-400 mb-8 max-w-xl mx-auto",
    MAIN_CTA: "main-cta btn-glow",
    
    // =============================================
    // FOOTER
    // =============================================
    FOOTER: "footer",
    FOOTER_TEXT: "footer-text",
    FOOTER_LINKS: "flex items-center gap-6",
    FOOTER_LINK: "text-gray-500 hover:text-white transition-colors text-sm"
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRICING_STYLES;
}