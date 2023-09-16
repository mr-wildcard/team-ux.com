import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [tailwind()],
  site: "https://team-ux.com",
  vite: {
    plugins: [yaml()],
  },
});
