import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";

const builtForGithubPages = typeof process.env.GITHUB_ACTION !== undefined;

const site = builtForGithubPages
  ? "https://mr-wildcard.github.io"
  : "htts://team-ux.com";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [tailwind()],
  site,
  vite: {
    plugins: [yaml()],
  },
});
