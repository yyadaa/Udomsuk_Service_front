const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue : '#003B74',
        bluebg : '#003b82',
        gray : '#D9D6D0',
        purple : '#35459E',

      }
    },
  },
  variants: {
    extend: {
      padding: ['hover','active'],
    },
  },
  plugins: [],
}
