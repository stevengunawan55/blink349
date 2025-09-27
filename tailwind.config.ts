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
        'newsprint': '#F8F5F2',
        'dark-text': '#1A1A1A',
        'accent-navy': '#2C3E50',
        'accent-red': '#9A2A2A',
      },
      fontFamily: {
        merriweather: ["var(--font-merriweather)"],
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;