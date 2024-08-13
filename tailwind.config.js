/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "light-grey" : "var(--light-grey)",
        "pure-white" : "var(--pure-white)",
        "almost-black" : "var(--almost-black",
        "dark-grey" : "var(--dark-grey)"
      }
    },
  },
  plugins: [],
}

