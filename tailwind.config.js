import { COLORS, FONTS } from "./src/utils/constants";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: FONTS,
    },
  },
  plugins: [],
};
