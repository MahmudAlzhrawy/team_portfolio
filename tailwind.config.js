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
        cream: '#FFF8E7',
        beige: '#F5EBDD',
        chestnut: {
          light: '#7B5E57',
          DEFAULT: '#654321',
          dark: '#5D3A2E',
          warm: '#8B4C39',
          mahogany: '#4E2C20',
          rosewood: '#A0522D',
        },
      },
      keyframes: {
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
        flipX: 'flipX 8s infinite ease-in-out',
        flipY: 'flipY 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
