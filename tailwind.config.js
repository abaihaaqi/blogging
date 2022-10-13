const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontSize: {
      sm: "0.9rem",
      base: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.5rem",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
