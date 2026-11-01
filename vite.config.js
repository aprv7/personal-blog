import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [mdx(), react({ include: /\.(js|jsx)$/ })],
});
