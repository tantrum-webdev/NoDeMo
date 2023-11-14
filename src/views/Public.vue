<script setup lang="ts">
import AppHeader from '@/modules/common/Header.vue';
import { useBookmarkStore } from '@/store';
import { onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { isNil } from '@/helpers/functions';

const route = useRoute();
const username = route.params.username as string;
const bookmarkStore = useBookmarkStore();

onUnmounted(() => {
  bookmarkStore.clearSharedBookmarks();
});
</script>

<template>
  <AppHeader />
  <div>{{ username }}'s shared list</div>
  <p v-if="isNil(bookmarkStore.sharedBookmarks)">No bookmarks !</p>
  <ul v-else>
    <li v-for="bookmark in bookmarkStore.sharedBookmarks" :key="bookmark.id">
      <article>
        <img :src="bookmark.cover" alt="Broken img" />
        <h2>{{ bookmark.title }}</h2>
        <a :href="bookmark.url" target="_blank">Go to link</a>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
