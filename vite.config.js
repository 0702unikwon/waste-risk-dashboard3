import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // ✅ 추가: Netlify에서 경로 깨지는 문제 해결
  plugins: [react()],
});
