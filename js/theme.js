// js/theme.js
// Tailwind CSS Configuration for CDN usage

tailwind.config = {
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