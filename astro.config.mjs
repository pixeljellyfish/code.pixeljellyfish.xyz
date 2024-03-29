import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://code.pixeljellyfish.xyz',
  base: '/code.pixeljellyfish.xyz',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react()]
});