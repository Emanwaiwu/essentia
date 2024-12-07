/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['ABCDiatype', 'sans-serif'],
    },
    screens: {
      sm: { max: "767px" },
      smm: { min: "425px", max: "765px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1439px" },
      xl: { min: "1440" },
    },
    extend: {},
  },
  plugins: [],
}