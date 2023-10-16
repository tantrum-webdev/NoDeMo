<script setup lang="ts">
import AppHeader from '@/modules/common/Header.vue';
import { useUserStore } from '@/store';
import { ref } from 'vue';

const form = ref({
  name: '',
  password: '',
  passwordConfirmation: '',
});

function handleSubmit() {
  const { password, passwordConfirmation } = form.value;
  if (password !== passwordConfirmation) {
    console.log('HOW IS THAT FOR FRONTEND VALIDATION EH');
  } else {
    const store = useUserStore();
    store.register({ name: form.value.name, password: form.value.password });
  }
}
</script>

<template>
  <AppHeader />
  <section>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <label for="username">Your username</label>
      <input type="text" required placeholder="John Doe" v-model="form.name" />
      <label for="password">Your password</label>
      <input type="password" id="password" required v-model="form.password" />
      <label for="passwordConfirm">Confirm your password</label>
      <input
        type="password"
        id="passwordConfirm"
        required
        v-model="form.passwordConfirmation"
      />
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account ? <router-link to="/login">Login</router-link>
    </p>
  </section>
</template>

<style scoped></style>
