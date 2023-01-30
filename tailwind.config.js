/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}
