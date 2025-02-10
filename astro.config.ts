import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

const LOCAL_PORT = 4321;
const LOCAL_HOST = "0.0.0.0";

function getSiteURL() {
  if (process.env.CF_PAGES) {
    if (process.env.CF_PAGES_BRANCH === "main") {
      return "https://team-ux-com.pages.dev/";
    } else {
      return `https://${process.env.CF_PAGES_BRANCH}.team-ux-com.pages.dev/`;
    }
  } else if (process.env.GITHUB_ACTION) {
    return "https://www.team-ux.com/";
  } else {
    return `http://${LOCAL_HOST}:${LOCAL_PORT}/`;
  }
}

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [icon(), sitemap()],
  site: getSiteURL(),
  vite: {
    plugins: [
      yaml(),
      tailwindcss({
        applyBaseStyles: false,
        nesting: true,
      }),
    ],
    build: {
      // mainly for transpiling optional chaining for iOS 12, ffs
      target: "es2019",
    },
  },
  server: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
  },
});
