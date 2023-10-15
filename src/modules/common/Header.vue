<script setup lang="ts">
import { useUserStore } from '@/store';
import { isNil } from '@/helpers/functions';

const store = useUserStore();
</script>

<template>
  <header>
    <h1>
      NoDeMo - Hello
      <span v-if="isNil(store.user)">Stranger</span>
      <span v-else>{{ store.user.name }}</span>
    </h1>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/my">Dashboard</router-link></li>
        <li><router-link to="/public">Public</router-link></li>
        <li>
          <router-link v-if="isNil(store.user)" to="/login">Login</router-link>
          <button v-else @click="store.logout">Log out</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
