import { Home, Dashboard, Login, Register, Error, Public } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';
import { useBookmarkStore, useUserStore } from './store';
import { isNil } from './helpers/functions';

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
    {
      path: '/:username',
      component: Public,
      beforeEnter: (to) => {
        const store = useBookmarkStore();

        store.getSharedBookmarks(to.params.username as string);
      },
    },
    {
      path: '/notfound',
      component: Error,
    },
  ],
});
