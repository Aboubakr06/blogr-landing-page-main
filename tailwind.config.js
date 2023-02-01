/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Overpass': ['Overpass', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}
