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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "#9DD05C",
        secondary: "#6DBB4A",
      },
      fontFamily: {
        sans: ["var(--font-albertSans)"],
        // mono: ["var(--font-notoSans)"],
      },
    },
  },
  plugins: [],
};
export default config;
