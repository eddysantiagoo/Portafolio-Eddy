/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 60s linear infinite",
      },
      colors: {
        primary: "rgb(183, 183, 138)",
        secondary: "rgb(152,105,49)",
      },
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
    },
    dropShadow: {
      lg: "0px 0px 15px rgba(20, 20, 20)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
