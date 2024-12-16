/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        span: "var(--span)",
        line: "var(--line)",
        text: "var(--text)",
        title: "var(--title)",
        error: "var(--error)",
        input: "var(--input)",
        circle: "var(--circle)",
        border: "var(--border)",
        button: "var(--button)",
        background: "var(--background)",
        buttonText: "var(--button-text)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
export default config;
