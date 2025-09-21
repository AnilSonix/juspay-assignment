import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfig = VitePWA({
  registerType: "autoUpdate",
  manifest: {
    name: "JUSPAY",
    short_name: "JUSPAY",
    description: "Global Payments Operating System",
    theme_color: "#a2d2ff",
    background_color: "#bde0fe",
    icons: [
      {
        src: "icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pwaConfig],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
