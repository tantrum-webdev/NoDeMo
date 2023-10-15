<script setup lang="ts">
import AppHeader from '@/modules/common/Header.vue';
import { useUserStore } from '@/store';
import { ref } from 'vue';

const store = useUserStore();
const userName = ref('');
const password = ref('');

function handleSubmit() {
  store.login({ name: userName.value, password: password.value });
}
</script>

<template>
  <AppHeader />
  <section>
    <h2>Login</h2>
    <form id="form" @submit.prevent="handleSubmit">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        required
        placeholder="JohnDoe"
        v-model.trim="userName"
      />
      <label for="password">Password</label>
      <input type="password" id="password" required v-model="password" />
      <button type="submit">Login</button>
    </form>
    <p>
      Don't have an account ? <router-link to="/register">Register</router-link>
    </p>
  </section>
</template>

<style scoped></style>
