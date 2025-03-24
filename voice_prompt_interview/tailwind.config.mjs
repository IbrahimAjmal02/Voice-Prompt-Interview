/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        fell: ['"IM Fell English"', 'serif'],
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
