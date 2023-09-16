import type { Config } from "tailwindcss";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "nav": "90%",
        "content": "50%",
      },
    },
  },
  plugins: [],
};
export default config;
