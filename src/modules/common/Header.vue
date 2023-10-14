<script setup lang="ts">
import { useUserStore } from '@/store';

const store = useUserStore();
</script>

<template>
  <header>
    <h1>
      NoDeMo - Hello
      <span v-if="store.user !== null">{{ store.user.name }}</span>
      <span v-else>Stranger</span>
    </h1>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/my">dashboard</router-link></li>
        <li><router-link to="/public">public</router-link></li>
      </ul>
    </nav>
    <button v-if="!store.user" @click="store.login">Login</button>
    <button v-else @click="store.logout">Log out</button>
  </header>
</template>

<style scoped></style>
