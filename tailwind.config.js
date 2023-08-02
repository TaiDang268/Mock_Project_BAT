/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'BAT-primary': '#008345',
        'BAT-text-color': '#0A0A0A'
      },
      spacing: {
        120: '120px',
        460: '460px',
        150: '150px',
        55: '55px'
      }
    }
  },
  plugins: []
}
