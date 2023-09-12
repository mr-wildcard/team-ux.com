/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    container: {
      center: true,
    },
    extends: {
      spacing: {
        8: "30px",
      },
    },
    fontFamily: {
      sans: ["SatoshiVariable", "sans-serif"],
    },
    colors: {
      primary: "#0F24F7",
      secondary: "#08124F",
      surface1: "#F5F3EB",
      surface2: "#FDF1D1",
      surface3: "#FFD9A6",
      surface4: "#FBBB64",
      surface5: "#DCE1FF",
      surface6: "#D3F5DE",
      surface7: "#D3F5DE",
      neutral1: "#474C6B",
      neutral2: "#9DA1B5",
      neutral3: "#DFE1EA",
      neutral4: "#9DA1B5",
    },
  },
};
