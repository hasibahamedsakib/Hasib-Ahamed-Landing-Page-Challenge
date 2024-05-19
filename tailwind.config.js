/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#383838",
        secondary: "",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
      screens: {
        "3xl": "1600px ",
        "4xl": "1700px",
      },
    },
  },
  plugins: [],
};
