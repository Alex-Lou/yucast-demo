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
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'dash': 'dash 3s linear infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'pulse-ring': 'pulse-ring 2s ease-out infinite',
                'gradient': 'gradient-shift 8s ease infinite',
                'spin': 'spin 1s linear infinite',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            }
        }
    }
}
