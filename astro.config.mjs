import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://teamlycan.io",
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    gfm: true
  }), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), compressor()],
  adapter: cloudflare(),
  output: "hybrid"
});