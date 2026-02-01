// js/styles/pricing-styles.js
// Style tokens specific to pricing.html

const PRICING_STYLES = {

    // =============================================
    // PRICING HERO
    // =============================================
    PRICING_HERO: "pricing-hero",
    PRICING_TITLE: "pricing-title animate-fade-in-up delay-100",
    PRICING_TITLE_GRADIENT: "block text-gradient",
    PRICING_SUBTITLE: "pricing-subtitle animate-fade-in-up delay-200",
    STATUS_BADGE: "status-badge glass animate-fade-in-up",
    STATUS_BADGE_TEXT: "text-sm text-gray-300",

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
    // PRICING SECTION
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
    PLAN_BTN_STARTER: "plan-button starter-button",
    PLAN_BTN_PRO: "plan-button pro-button btn-glow",
    PLAN_BTN_ENTERPRISE: "plan-button enterprise-button",

    // =============================================
    // FAQ SECTION
    // =============================================
    FAQ_SECTION: "faq-section",
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
    CTA_SUBTITLE: "text-gray-400 mb-8 max-w-xl mx-auto"
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRICING_STYLES;
}