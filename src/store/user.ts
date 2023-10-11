import { defineStore } from 'pinia';

interface User {
  name: string;
  id: string;
}

export const useUserStore = defineStore('user', {
  /**
   * Could be worth to some form of 'state' key with the user.
   * This key would represent what is happening concerning the user data in a string form
   * with the possible values being eg: 'loading', 'connected', 'error', 'not connected'
   * With this we can apply conditional renders or specific logic based on this state value
   */
  state: () => {
    return {
      user: null as User | null,
    };
  },

  actions: {
    // login() {
    //   // To be replaced by some actual endpoint stored in a config somewhere
    //   fetch('/')
    //     .then((res) => res.json())
    //     .then((user) => {
    //       this.user = user;
    //     })
    //     .catch((err) => {
    //       // Need to to something with the error other than logging it
    //       console.warn(err);
    //     });
    // },
    login() {
      this.user = { id: '1234', name: 'Cyril' };
    },

    logout() {
      this.user = null;
    },
  },
});
