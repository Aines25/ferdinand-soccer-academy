/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'academy-lavender': '#C4B1CF',
        'academy-lavender-dark': '#A08AAB',
        'academy-black': '#0A0A0A',
        'academy-gray': '#1A1A1A',
      },
      fontFamily: {
        'heading': ['Antonio', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
