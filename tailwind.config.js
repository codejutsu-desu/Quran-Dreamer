/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Lexend", "sans-serif"],
      },
      colors: {
        theme: "#10b981",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
