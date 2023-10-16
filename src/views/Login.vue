<script setup lang="ts">
import AppHeader from '@/modules/common/Header.vue';
import { useUserStore } from '@/store';
import { ref } from 'vue';

const store = useUserStore();
const form = ref({
  name: '',
  password: '',
});

function handleSubmit() {
  store.login(form.value);
}
</script>

<template>
  <AppHeader />
  <section>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        required
        placeholder="JohnDoe"
        v-model.trim="form.name"
      />
      <label for="password">Password</label>
      <input type="password" id="password" required v-model="form.password" />
      <button type="submit">Login</button>
    </form>
    <p>
      Don't have an account ? <router-link to="/register">Register</router-link>
    </p>
  </section>
</template>

<style scoped></style>
