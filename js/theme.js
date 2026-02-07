// js/theme.js
// Tailwind CSS Configuration for CDN usage

const config = {
    theme: {
        extend: {
            colors: {
                yucast: {
                    dark: '#0a0a0f',
                    card: '#0d0d12',
                    cyan: '#22d3ee',
                    purple: '#a855f7',
                    pink: '#ec4899',
                }
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            }
        }
    }
};

// If Tailwind CDN fails to load (blocked/old Safari), don't crash the whole page.
if (typeof tailwind !== 'undefined') {
    tailwind.config = config;
} else {
    window.__tailwind_config = config;
}
