import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@routes': resolve(__dirname, './src/routes'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@themes': resolve(__dirname, './src/themes'),
      '@utils': resolve(__dirname, './src/utils'),
      '@views': resolve(__dirname, './src/views'),
    },
  },
  server: {
    port: 8085,
  },
});
