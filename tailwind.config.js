/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['var(--font-alexandria)'],
      },
      colors: {
        primary: {
          light: '#4FC3F7',
          DEFAULT: '#1976D2',
          dark: '#0D47A1',
        },
        secondary: {
          light: '#E3F2FD',
          DEFAULT: '#BBDEFB',
          dark: '#90CAF9',
        },
        gray: {
          light: '#B0BEC5',
          DEFAULT: '#607D8B',
          dark: '#455A64',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        flipX: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
        flipY: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(-1)' },
        },
        
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        pulseSlow: 'pulseSlow 2s infinite',
        flipX: 'flipX 8s infinite ease-in-out',
        flipY: 'flipY 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
