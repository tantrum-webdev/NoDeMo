<script setup lang="ts">
import { isNil } from '@/helpers/functions';
import AppHeader from '@/modules/common/Header.vue';
import { useUserStore, useBookmarkStore } from '@/store';

const userStore = useUserStore();
const bookmarkStore = useBookmarkStore();

if (!isNil(userStore.user)) {
  bookmarkStore.getBookmarks(userStore.user.id);
}
</script>

<template>
  <AppHeader />
  <div>This is the dashboard</div>
  <p v-if="isNil(bookmarkStore.bookmarks)">No bookmarks !</p>
  <ul v-else>
    <li v-for="bookmark in bookmarkStore.bookmarks" :key="bookmark.id">
      <article>
        <img :src="bookmark.cover" alt="Broken img" />
        <h2>{{ bookmark.title }}</h2>
        <a :href="bookmark.url" target="_blank">Go to link</a>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
