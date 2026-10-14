import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// React kodi o'zgarmaydi, lekin build'da yengil Preact ishlatiladi (~4x kichik)
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/client': 'preact/compat/client',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
      'react/jsx-dev-runtime': 'preact/jsx-dev-runtime'
    }
  },
  build: { assetsInlineLimit: 0, cssCodeSplit: false }
})
