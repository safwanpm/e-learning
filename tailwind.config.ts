import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        equip: ['EquipExtended', 'Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff9500", 
        // secondary: "#8b2711", 
        bgcolor: "#fbf8f3", 
        teritory: "#ffff", 
        
        secondary: "#fcc578",
      },
    },
  },
  plugins: [],
} satisfies Config;
