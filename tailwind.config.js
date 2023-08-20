/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./*.{html,js}"

],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}
