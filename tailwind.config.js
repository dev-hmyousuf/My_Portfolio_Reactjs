/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#FFE9D9", 
      },
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        handleeRegular: ["Handlee", "cursive", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
