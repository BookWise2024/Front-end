import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 외부에서 접근 가능하도록 설정
    port: 4173,       // 사용할 포트(preview는 4173)
    proxy: {
      // '/api': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')

      '/api': {
        target: 'https://www.aladin.co.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/ttb/api', '')
      }
    },
  },
  preview: {
    host: '0.0.0.0', // `npm run preview`에서 외부 접근을 허용하도록 설정
    port: 4173,      // 사용할 포트
  }
})
