import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const dir = path.resolve(__dirname, "build");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: dir,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
