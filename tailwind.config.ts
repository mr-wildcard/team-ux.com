import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,ts}", "./public/**/*.html", "./public/**/*.css"],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-inherit": {
          "font-size": "inherit",
          "line-height": "inherit",
          "font-weight": "inherit",
        },
      });
    }),
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1413px",
      },
    },
    extend: {
      spacing: {
        8: "30px",
      },
      screens: {
        "2xl": "1512px",
      },
    },
    colors: {
      primary: "#0F24F7",
      secondary: "#08124F",
      surface1: "#F5F3EB",
      surface2: "#FDF1D1",
      surface3: "#FFD9A6",
      surface4: "#FBBB64",
      surface5: "#DCE1FF",
      surface6: "#E9D6FF",
      surface7: "#D3F5DE",
      neutral1: "#474C6B",
      neutral2: "#9DA1B5",
      neutral3: "#DFE1EA",
      neutral4: "#FFF",
    },
  },
} satisfies Config;
