import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import sitemap from "@astrojs/sitemap";

const LOCAL_PORT = 4321;
const LOCAL_HOST = true;

function getSiteURL() {
  if (process.env.CF_PAGES) {
    if (process.env.CF_PAGES_BRANCH === "main") {
      return "https://team-ux-com.pages.dev/";
    } else {
      return `https://${process.env.CF_PAGES_BRANCH}.team-ux.pages.dev/`;
    }
  } else if (process.env.GITHUB_ACTION) {
    return "https://289zdbdlnp.preview.infomaniak.website/";
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
    build: {
      target: "es2019",
    },
  },
  server: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
  },
});
