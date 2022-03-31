const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'sm': '0.9rem',
      'base': '1rem',
      'lg': '2rem',
      'xl': '2.5rem',
      '2xl': '3rem',
      '3xl': '4rem'
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        overall: '#001A20',
        primary: '#16D1D2',
        secondary: '#D120E8',
      }
    },
  },
  plugins: [],
}
