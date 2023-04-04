/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(183, 183, 138)",
        secondary: "rgb(152,105,49)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
