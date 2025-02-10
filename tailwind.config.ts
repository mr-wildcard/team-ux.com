import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,ts}", "./public/**/*.html", "./public/**/*.css"],
  theme: {
    extend: {
      spacing: {
        8: "30px",
      },
    },
  },
} satisfies Config;
