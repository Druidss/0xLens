/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0ff',
          dark: '#00c0cc',
          light: '#33f6ff',
        },
        secondary: '#7b61ff',
        success: '#00ff87',
        error: '#ff3864',
        warning: '#ffd600',
        info: '#00d4ff',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'skeleton-shimmer': 'skeleton-shimmer 1.5s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'skeleton-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
