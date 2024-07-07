import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // '/oauth2' : {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      // },
      // '/login' : {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      // },
      // '/logout' : {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      // }
      // '/api': {
      //   target: 'https://www.aladin.co.kr',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '/ttb/api', '')
      // }
    },
    configureServer: ({ middlewares }) => {
      middlewares.use('/api', (req, res, next) => {
        if (req.url.startsWith('/api/loantItemSrch')) {
          createProxyMiddleware({
            target: 'http://data4library.kr',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
          })(req, res, next);
        } else if (req.url.startsWith('/api/ItemSearch.aspx')) {
          createProxyMiddleware({
            target: 'https://www.aladin.co.kr',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
          })(req, res, next);
        } else {
          next();
        }
      });
    },
  }
})
