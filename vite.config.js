import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ base 옵션 꼭 필요!
export default defineConfig({
  base: './',
  plugins: [react()],
})
