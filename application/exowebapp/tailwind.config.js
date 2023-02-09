const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.purple,
      secondary: colors.sky,
      neutral: colors.slate,
    },
    extend: {},
  },
  plugins: [],
}
