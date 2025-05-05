import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "React QR Code Generator",
        short_name: "QR Code",
        description: "QR Code Generator powered by React",
        theme_color: "#ffffff",
        icons: [
          {
            src: "favicon.svg",
            sizes: "32x32",
            type: "image/svg",
          },
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
