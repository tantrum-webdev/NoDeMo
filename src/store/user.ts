import { fetcher } from '@/helpers/functions';
import { Maybe, User, UserForm } from '@/types';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  /**
   * Could be worth to some form of 'state' key with the user.
   * This key would represent what is happening concerning the user data in a string form
   * with the possible values being eg: 'loading', 'connected', 'error', 'not connected'
   * With this we can apply conditional renders or specific logic based on this state value
   */
  state: () => {
    return {
      user: null as Maybe<User>,
    };
  },

  actions: {
    login({ name, password }: UserForm) {
      fetcher<User>('/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name,
          password,
        }),
      })
        .then((user) => {
          this.user = user;
          this.router.push({ path: '/my' });
        })
        .catch((err) => {
          console.warn('SOMETHING HAPPENED', err);
        });
    },

    logout() {
      this.user = null;
      this.router.push({ path: '/' });
    },
  },
});
