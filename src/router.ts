import { Home, Dashboard, Login, Register, Error, Public } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [];

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/my', component: Dashboard }, // this will need to be guarded, redirected to login
    { path: '/public', component: Public }, // this will need a dynamic param for the username
    { path: '/:pathMatch(.*)*', component: Error },
  ],
});
