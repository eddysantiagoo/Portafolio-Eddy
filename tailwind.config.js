/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(262, 100%, 61%)",
        secondary: "hsl(265, 51%, 8%)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
