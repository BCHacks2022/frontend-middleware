/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#1d3557",
        primaryLight: "#457b9d",
        secondary: "#a8dadc",
        light: "#f1faee",
        accent: "#e63946",
      },
    },
  },
  plugins: [],
};
