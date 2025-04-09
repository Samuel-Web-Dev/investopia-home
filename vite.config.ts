import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Disable HMR completely to avoid any WebSocket connections
    hmr: false
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: false,
    emptyOutDir: true,
  },
  define: {
    // HMR-related defines with null/empty defaults
    __HMR_CONFIG_NAME__: JSON.stringify(null),
    __HMR_HOSTNAME__: JSON.stringify(null),
    __HMR_PORT__: JSON.stringify(null),
    __HMR_BASE__: JSON.stringify(null),
    __HMR_PROTOCOL__: JSON.stringify(null),
    __HMR_DIRECT_TARGET__: JSON.stringify(null),
    __HMR_ENABLED__: JSON.stringify(false),
    __HMR_ENABLE_OVERLAY__: JSON.stringify(false),
    
    // WebSocket-related defines with empty defaults
    __WS_TOKEN__: JSON.stringify(''),
    __SERVER_HOST__: JSON.stringify(''),
    __APP_ENV__: JSON.stringify('development'),
    __BASE__: JSON.stringify('/'),
    __DEFINES__: JSON.stringify({
      // Your default definitions
      PRODUCTION: false,
      DEVELOPMENT: true,
      // Add any other required defaults
      APP_NAME: 'Simplex',
      VERSION: '1.0.0'
    }),
  }
}));