/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,ts}"],
  plugins: ["tailwindcss/nesting"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        8: "30px",
      },
      screens: {
        "2xl": "1413px",
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
    fontSize: {
      "display-large": [
        "72px",
        {
          lineHeight: "84px",
          fontWeight: "700",
        },
      ],
      "display-medium": [
        "60px",
        {
          lineHeight: "82px",
          fontWeight: "700",
        },
      ],
      "display-small": [
        "40px",
        {
          lineHeight: "65px",
          fontWeight: "700",
        },
      ],
      "headline-large": [
        "32px",
        {
          lineHeight: "43px",
          fontWeight: "900",
        },
      ],
      "headline-medium-bold": [
        "25px",
        {
          lineHeight: "34px",
          fontWeight: "900",
        },
      ],
      "headline-medium": [
        "25px",
        {
          lineHeight: "34px",
          fontWeight: "700",
        },
      ],
      "headline-small": [
        "20px",
        {
          lineHeight: "27px",
          fontWeight: "700",
        },
      ],
      "body-extra-large": [
        "28px",
        {
          lineHeight: "38px",
          fontWeight: "500",
        },
      ],
      "body-large": [
        "20px",
        {
          lineHeight: "27px",
          fontWeight: "700",
        },
      ],
      "body-medium-bold": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "500",
        },
      ],
      "body-small": [
        "14px",
        {
          lineHeight: "19px",
          fontWeight: "500",
        },
      ],
      "label-large": [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      "label-medium-bold": [
        "16px",
        {
          lineHeight: "22px",
          fontWeight: "700",
        },
      ],
      "label-medium": [
        "16px",
        {
          lineHeight: "22px",
          fontWeight: "500",
        },
      ],
      "label-small": [
        "14px",
        {
          lineHeight: "19px",
          fontWeight: "700",
        },
      ],
    },
  },
};
