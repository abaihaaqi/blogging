import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        serif: ["var(--font-lora)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
