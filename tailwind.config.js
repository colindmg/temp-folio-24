/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Inter", "sans-serif"],
      },
      colors: {
        "off-white": "#FF0000",
        "off-black": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
