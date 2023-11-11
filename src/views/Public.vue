<script setup lang="ts">
import AppHeader from '@/modules/common/Header.vue';
import { useBookmarkStore } from '@/store';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const username = route.params.username as string;
const bookmarkStore = useBookmarkStore();

onMounted(() => {
  bookmarkStore.getSharedBookmarks(username);
});
</script>

<template>
  <AppHeader />
  <div>{{ username }}'s shared list</div>
</template>

<style scoped></style>
