/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        bodyFont : 'Poppins',
        titleFont : 'Kablammo',
        backUpFont : 'Lobster'
      }
    },
  },
  plugins: [],
}
