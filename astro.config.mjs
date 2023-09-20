import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import sitemap from "@astrojs/sitemap";
const buildingForGithubPages = process.env.GITHUB_ACTION !== undefined;
const site = buildingForGithubPages ? "https://mr-wildcard.github.io" : "https://team-ux.com";
const base = buildingForGithubPages ? "/team-ux.com" : undefined;

/** @type {import('astro').AstroUserConfig} */

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site,
  base,
  vite: {
    plugins: [yaml()]
  }
});