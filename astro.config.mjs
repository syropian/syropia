import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import syntaxTheme from "./syntax.json";

export default defineConfig({
  site: "https://syropia.net/",
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: syntaxTheme,
    },
  },
});
