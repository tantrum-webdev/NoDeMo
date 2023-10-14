import { createApp, markRaw } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { Router } from 'vue-router';

// Start MSW worker only while in dev
if (import.meta.env.DEV) {
  import('@/mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

// augment the pinia store with the router to use in actions
declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router;
  }
}

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App).use(router).use(pinia).mount('#app');
