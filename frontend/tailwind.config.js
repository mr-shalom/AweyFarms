/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-herobg", "bg-aboutherobg"],
  theme: {
    extend: {
      colors: {
        logo: "#fe8340",
        navlinks: "#293e31",
        homesection1: "#fcf9f4",
        homesection2: "#dacec2",
      },

      backgroundImage: {
        herobg: "url('/src/assets/herobg6.jpg')",
        aboutbg: "url('/src/assets/aboutherobg.avif')",
      },
      maxWidth: {
        maxW: "1400px",
      },
      fontFamily: {
        titlefont: ["Museo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
