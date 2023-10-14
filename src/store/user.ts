import { restFetch } from '@/helpers/functions';
import { Maybe, User } from '@/types';
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
    // Will be replaced by proper action that posts the login form
    login() {
      restFetch('/login', { method: 'POST' }).then((user) => {
        this.user = user;
        this.router.push({ path: '/my' });
      });
    },

    logout() {
      this.user = null;
      this.router.push({ path: '/' });
    },
  },
});
