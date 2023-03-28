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
      nichts: '#ffffff',
      sand: '#fcd34d',
      geroell: '#9ca3af',
      fels: '#404040',
      wasser: '#38bdf8',
      pflanzen: '#16a34a',
      morast: '#000000',
      lava: '#f59e0b',
      rot: '#ff0000'
    },
    extend: {},
  },
  plugins: [],
}
