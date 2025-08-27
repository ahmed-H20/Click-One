import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  envPrefix: 'VITE_',
  plugins: [
    react(), 
    tailwindcss(), 
    envCompatible()
  ],
})
