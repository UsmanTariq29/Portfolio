import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        watch: {
            // Ignore IDE metadata folders (Visual Studio's .vs, VS Code's .vscode
            // settings that sometimes lock files, etc.) so Vite's dev server
            // doesn't try to watch files that the OS/IDE has locked.
            ignored: ['**/.vs/**', '**/node_modules/**', '**/.git/**'],
        },
    },
})