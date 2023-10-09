import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import sitemap from "@astrojs/sitemap";

const LOCAL_PORT = 4321;
const LOCAL_HOST = true;

function getSiteURL() {
  if (process.env.CF_PAGES) {
    if (process.env.CF_PAGES_BRANCH !== "main") {
      return `https://${process.env.CF_PAGES_BRANCH}.team-ux.pages.dev/`;
    } else {
      return "https://team-ux.com/";
    }
  } else {
    return `http://localhost:${LOCAL_PORT}/`;
  }
}

/** @type {import('astro').AstroUserConfig} */

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  site: getSiteURL(),
  vite: {
    plugins: [yaml()],
  },
  server: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
  },
});
