// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, @ alias etc. Do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "node:path";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      alias: {
        "next/link": path.resolve(__dirname, "src/shims/next-link.tsx"),
        "next/image": path.resolve(__dirname, "src/shims/next-image.tsx"),
        "next/navigation": path.resolve(__dirname, "src/shims/next-navigation.ts"),
      },
    },
  },
});
