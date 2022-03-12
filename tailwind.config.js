const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      pastel: {
        blue: '#93B5C6',
        gray: '#C9CCD5',
        pink: '#E4D8DC',
        cream: '#FFE3E3'
      },
      night: {
        black: '#00001a',
        purple: '#301B3F',
        gray: '#3C415C',
        light: '#B4A5A5'
      },
      dark: {
        primary: '#FEF5ED',
        secondary: '#D3E4CD',
      },
      light: {
        primary: '#152D35',
        secondary: '#112031'
      }
    },
    extend: {},
  },
  plugins: [],
}
