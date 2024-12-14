import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFFFFA",
        secondary: "#4D3D30",
        Tertiary: "#F7F2EC"
      },
      colors: {
        secondary: "#4D3D30",
      },
    },
  },
  plugins: [],
} satisfies Config;
