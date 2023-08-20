/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./*.{html,js,css}",
  "./**/*.{html,js,css}"

],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}

