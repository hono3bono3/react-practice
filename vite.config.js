import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: '/react-practice/',
    root: './',
    server: {
        open: true,
        port: 8080,
    },
    build: {
        outDir: 'build',
    },
    plugins: [react()],
})
