import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Les couleurs officielles de MGroup
        mblue: {
          DEFAULT: "#1e2380", // Le bleu roi du logo
          dark: "#0a0c35",    // Un bleu nuit très sombre pour les fonds
        },
        mred: {
          DEFAULT: "#e6007e", // Le magenta/rose vif du logo
        },
        morange: {
          DEFAULT: "#ff6b00", // La touche orange
        }
      },
    },
  },
  plugins: [],
};
export default config;