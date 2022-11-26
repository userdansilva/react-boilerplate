/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { loadEnv } from "vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    env: loadEnv("testing", process.cwd()),
  },
});
