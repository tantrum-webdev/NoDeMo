import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

if (import.meta.env.DEV) {
  import('@/mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
