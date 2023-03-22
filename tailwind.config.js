/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b2eff",
        secondary: "#0B0A1F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
