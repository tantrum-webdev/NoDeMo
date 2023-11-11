import { Home, Dashboard, Login, Register, Public } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './store';
import { isNil } from './helpers/functions';

export const routes = [];

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
      path: '/logout',
      redirect: { path: '/' },
    },
    { path: '/register', component: Register },
    {
      path: '/my',
      component: Dashboard,
      meta: { requiresAuth: true },
      beforeEnter: () => {
        const store = useUserStore();

        if (isNil(store.user)) {
          return { path: '/login' };
        }
      },
    },

    { path: '/:username', component: Public }, // this will need a dynamic param for the username
  ],
});
