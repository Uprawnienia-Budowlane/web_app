const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        warmGray: colors.warmGray,
      },
      minWidth: {
        '12': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
