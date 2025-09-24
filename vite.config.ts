import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // config options
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "bundle",
      formats: ["es"],
    },
  },
});
