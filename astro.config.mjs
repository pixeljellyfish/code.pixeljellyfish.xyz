import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      purge: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
      mode: "jit",
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#1a202c",
            secondary: "#2d3748",
            accent: "#e2e8f0",
            highlight: "#edf2f7",
            muted: "#718096",
            success: "#48bb78",
            warning: "#f6ad55",
            danger: "#e53e3e",
            info: "#63b3ed"
          }
        }
      },
      applyBaseStyles: false
    }
  }), react()]
});