import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [tailwind()],
  site: "https://team-ux.com",
});
