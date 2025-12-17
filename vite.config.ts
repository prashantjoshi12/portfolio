import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Get base path from environment variable or use default
// For GitHub Pages: use '/repository-name' if repo is not username.github.io
// For username.github.io: use '/'
const base = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : process.env.BASE_PATH || '/'

export default defineConfig({
  base: base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
})

