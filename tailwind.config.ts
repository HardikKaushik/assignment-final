import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:null as unknown as "media" | "class",
  theme: {
    
    extend: {
      colors: {
        'orange': '#FF5555',
        'yellow': '#FDE598',
        },
    },
  },
  plugins: [],
};
export default config;
