import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    env: {
      VITE_EMAILJS_PUBLIC_KEY: "test-key",
      VITE_EMAILJS_SERVICE_ID: "test-service",
      VITE_EMAILJS_TEMPLATE_ID: "test-template",
      VITE_CONTACT_EMAIL: "test@example.com",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
