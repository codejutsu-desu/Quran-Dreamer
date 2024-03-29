/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Lexend", "sans-serif"],
      },
      colors: {
        theme: "#10b981",
        hoverTheme: "#047857",
        white: "#FFFFFF",
        black: "#0f172a",
        link: "#4338ca",
      },
    },
  },
  plugins: [[require("flowbite/plugin")]],
};
