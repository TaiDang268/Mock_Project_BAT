/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'BAT-primary': '#008345',
        'BAT-text-color': '#0A0A0A',
        'BAT-bg-button': 'rgba(0, 131, 69, 1)'
      },
      spacing: {
        120: '120px',
        460: '460px',
        150: '150px',
        55: '55px',
        638: '638px',
        276: '276px'
      },
      backgroundImage: {
        'home-gradent':
          'linear-gradient(to left, rgba(10, 130, 65, 1), rgba(62, 187, 108, 0.87), rgba(165, 224, 106, 0.79), rgba(252, 255, 104, 0.31))'
      }
    }
  },
  plugins: []
}
