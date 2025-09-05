/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" /> 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        strictPort: true,
        cors: {
            origin: process.env.VITE_SPA_ORIGIN ?? 'http://localhost:5173',
            credentials: true,
        },
        proxy: {
            // For local dev only, forward /oauth to BFF. In Azure, call absolute URL.
            '/oauth': {
                target: process.env.VITE_BFF_BASE || 'https://asbff.azurewebsites.net',
                changeOrigin: true,
                secure: true,
            },
        },
    },
})
