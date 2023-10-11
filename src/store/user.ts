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
      user: { name: 'Cyril', id: 1235 },
    };
  },

  actions: {
    login() {
      // To be replaced by some actual endpoint
      fetch('/')
        .then((res) => res.json())
        .then((user) => {
          this.user = user;
        })
        .catch((err) => {
          // Need to to something with the error other than logging it
          console.warn(err);
        });
    },
  },
});
