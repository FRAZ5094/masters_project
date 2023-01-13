import { defineConfig } from "vite";
import vitePluginString from "vite-plugin-string";

export default defineConfig({
  base: "/masters_project/",
  plugins: [vitePluginString.default()],
});
