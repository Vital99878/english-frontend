import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

console.log("path.resolve(__dirname): ", path.resolve(__dirname), "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/components/features"),
      },
    ],
  },
});
