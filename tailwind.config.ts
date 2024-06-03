import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        "secondary-50": "#f6f6f7",
        "secondary-100": "#e8e8ea",
        "secondary-200": "#dcdddf",
        "secondary-600": "#3b3c4a",
        "secondary-900": "#141624",
        "theme-1-primary": "#4b6bfb",
        "secondary-500": "#696a75",
        "secondary-400": "#97989f",
        "secondary-800": "#181a2a",
        dimgray: "rgba(105, 106, 117, 0.3)",
        mediumslateblue: "rgba(75, 107, 251, 0.05)",
        "secondary-1001": "#f4f4f5",
        "secondary-4001": "#a1a1aa",
      },
      spacing: {},
      fontFamily: {
        "text-base-regular": "'Plus Jakarta Sans'",
        "body-b4-medium": "'Work Sans'",
        "body-text-sm-14-regular": "Inter",
      },
      borderRadius: {
        "9xl": "28px",
        "81xl": "100px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      sm: "0.875rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      "17xl": "2.25rem",
      "11xl": "1.875rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
