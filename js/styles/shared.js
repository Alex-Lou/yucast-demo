// js/styles/shared.js
// Shared style tokens used across multiple pages

const SHARED_STYLES = {

    // =============================================
    // PAGE BASE
    // =============================================
    PAGE_BODY: "page-body",

    // =============================================
    // LAYOUT CONTAINERS
    // =============================================
    CONTAINER_SM: "max-w-3xl mx-auto",
    CONTAINER_MD: "max-w-4xl mx-auto",
    CONTAINER_LG: "max-w-6xl mx-auto",
    CONTAINER_XL: "max-w-7xl mx-auto",

    // =============================================
    // FLEX UTILITIES
    // =============================================
    FLEX_CENTER: "flex items-center justify-center",
    FLEX_BETWEEN: "flex items-center justify-between",
    FLEX_COL_CENTER: "flex flex-col md:flex-row items-center justify-between gap-6",
    FLEX_GAP_3: "flex items-center gap-3",
    FLEX_GAP_4: "flex items-center gap-4",
    FLEX_GAP_6: "flex items-center gap-6",

    // =============================================
    // TOAST
    // =============================================
    TOAST_CONTAINER: "toast fixed top-6 right-6 z-[100] px-6 py-4 rounded-xl shadow-2xl hidden",
    TOAST_CONTENT: "flex items-center gap-3",
    TOAST_MESSAGE: "font-medium",

    // =============================================
    // BACKGROUND
    // =============================================
    BG_CONTAINER: "background-container",
    BG_OVERLAY: "background-overlay",
    BG_GLOW_PURPLE: "background-glow glow-purple",
    BG_GLOW_CYAN: "background-glow glow-cyan",
    BG_GLOW_INDIGO: "background-glow glow-indigo",
    GRID_OVERLAY: "grid-overlay grid-pattern",

    // =============================================
    // PARTICLES
    // =============================================
    PARTICLES_CONTAINER: "fixed inset-0 -z-5 pointer-events-none overflow-hidden",
    PARTICLE_SM: "absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-50 animate-float",
    PARTICLE_MD: "absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 animate-float",
    PARTICLE_LG: "absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 animate-float",

    // =============================================
    // NAVBAR
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
    CTA_BUTTON: "cta-button btn-glow",

    // =============================================
    // TYPOGRAPHY
    // =============================================
    TEXT_GRADIENT: "text-gradient",
    TEXT_GRAY_300: "text-gray-300",
    TEXT_GRAY_400: "text-gray-400",
    TEXT_GRAY_500: "text-gray-500",
    TEXT_WHITE: "text-white",
    TEXT_SM: "text-sm",
    TEXT_XS: "text-xs",
    FONT_BOLD: "font-bold",
    FONT_BLACK: "font-black",
    FONT_SEMIBOLD: "font-semibold",

    // =============================================
    // SECTION HEADERS
    // =============================================
    SECTION_HEADER: "section-header",
    SECTION_TITLE: "section-title",
    SECTION_SUBTITLE: "section-subtitle",

    // =============================================
    // BUTTONS
    // =============================================
    MAIN_CTA: "main-cta btn-glow",
    SECONDARY_CTA: "secondary-cta",

    // =============================================
    // FOOTER
    // =============================================
    FOOTER: "footer",
    FOOTER_TEXT: "footer-text",
    FOOTER_LINKS: "flex items-center gap-6",
    FOOTER_LINK: "text-gray-500 hover:text-white transition-colors text-sm"
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SHARED_STYLES;
}