import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://syropia.net",
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
