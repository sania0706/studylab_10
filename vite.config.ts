import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The componentTagger import is removed as it's part of the Lovable configuration.
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // The conditional componentTagger plugin has been removed.
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));