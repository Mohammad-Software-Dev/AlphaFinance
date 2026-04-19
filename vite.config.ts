import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tailwindcss(),
      svgr({
        svgrOptions: {
          icon: true,
          ref: true,
        },
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      cors: {
        origin: env.VITE_SPA_ORIGIN ?? "http://localhost:5173",
        credentials: true,
      },
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1000,
    },
  };
});
