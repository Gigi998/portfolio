import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        invert: "var(--color-invert)",
        blue: "#2657a6",
        background: "var(--background)",
      },
      fontSize: {
        heading: [
          "64px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.04em",
            fontWeight: "500",
          },
        ],
        "sm-heading": [
          "32px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "body-1": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
          },
        ],
        "body-2": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
