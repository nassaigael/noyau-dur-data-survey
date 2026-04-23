import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#f5f0eb',
                    100: '#e8ddd3',
                    200: '#d4bfa7',
                    300: '#b89473',
                    400: '#a0784f',
                    500: '#8b6540',
                    600: '#6f4e32',
                    700: '#5a3d28',
                    800: '#4a3222',
                    900: '#3d291c',
                },
                green: {
                    50: '#f0f7f0',
                    100: '#dceddc',
                    200: '#bbd9bb',
                    300: '#8fbf8f',
                    400: '#6ba46b',
                    500: '#4c8b4c',
                    600: '#3d6f3d',
                    700: '#345a34',
                    800: '#2d4a2d',
                    900: '#263d26',
                }
            },
            boxShadow: {
                'neumorph': '8px 8px 16px rgba(58, 41, 28, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7)',
                'neumorph-inset': 'inset 8px 8px 16px rgba(58, 41, 28, 0.15), inset -8px -8px 16px rgba(255, 255, 255, 0.7)',
                'neumorph-sm': '4px 4px 8px rgba(58, 41, 28, 0.12), -4px -4px 8px rgba(255, 255, 255, 0.6)',
                'neumorph-hover': '2px 2px 4px rgba(58, 41, 28, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.5)',
            }
        },
    },
    plugins: [],
} satisfies Config