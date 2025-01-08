import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "src") },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@shared",
        replacement: path.resolve(__dirname, "src/shared"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/components/features"),
      },
      {
        find: "@controllers",
        replacement: path.resolve(__dirname, "src/controllers"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
      {
        find: "@models",
        replacement: path.resolve(__dirname, "src/models"),
      },
      {
        find: "@types",
        replacement: path.resolve(__dirname, "src/types"),
      },
      {
        find: "@mock",
        replacement: path.resolve(__dirname, "src/mock"),
      },
      {
        find: "@const",
        replacement: path.resolve(__dirname, "src/const"),
      },

    ],
  },
});
