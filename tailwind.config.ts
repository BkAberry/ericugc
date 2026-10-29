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
        ivory: {
          DEFAULT: "#F9F8F3",
          dark: "#F2F0E9",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          dark: "#000000",
        },
        cobalt: {
          DEFAULT: "#0047AB",
          dark: "#003580",
        },
        lime: "#BFFF00",
        orange: "#FF8C00",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
