import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/lonelysitcher/", // 👈 Укажи имя репозитория здесь!
  plugins: [react()],
});
