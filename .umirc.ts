import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/about', component: 'about' },
  ],
  npmClient: 'npm',
});