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
        // CHARTE MGROUP MISE À JOUR
        mblue: {
          DEFAULT: "#1e2380", // Bleu roi du logo
          dark: "#050520",    // LE NOUVEAU FOND (Bleu Nuit très sombre)
          light: "#2a3090",
        },
        mred: {
          DEFAULT: "#e6007e", // Magenta MGroup
          glow: "#ff3399",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;