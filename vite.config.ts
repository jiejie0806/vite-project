import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置scss
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/styles/sassConfig.scss";',
        additionalData: `@use "./src/styles/sassConfig.scss" as *;`,
      }
    }
  },
})
