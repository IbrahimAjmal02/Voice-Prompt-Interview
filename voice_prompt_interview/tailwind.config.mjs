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
       'magical-gold': '#D4AF37',
       'magical-bronze': '#CD7F32',
     },
     fontFamily: {
       cinzel: ['Cinzel', 'serif'],
       fell: ['IM Fell English', 'serif'],
       crimson: ['Crimson Pro', 'serif'],
     }
   },
 },
 plugins: [
   require("tailwindcss-animate")
 ],
};

