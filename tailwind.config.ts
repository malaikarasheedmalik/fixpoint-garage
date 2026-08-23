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
        burgundy: "#5B2631",
        cream: "#FAF6EF",
        terracotta: "#B85C4A",
        beige: "#D8C3A5",
        warmgray: "#6F6A63",
        offwhite: "#FFFDFC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(91,38,49,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
