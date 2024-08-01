import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212A33",
        cardBackground: "#1E2730",
        cardBackgroundTint: "#39404C",
        accentOrange: "#FE5659",
        orangeTint: "#FF998B",
      },
    },
  },
  plugins: [],
};
export default config;
