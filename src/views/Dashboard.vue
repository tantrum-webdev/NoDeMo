<script setup lang="ts">
import { isNil, isNotNil } from '@/helpers/functions';
import AppHeader from '@/modules/common/Header.vue';
import { useUserStore, useBookmarkStore } from '@/store';
import { onMounted, ref } from 'vue';

const userStore = useUserStore();
const bookmarkStore = useBookmarkStore();

const bookmarkUrl = ref('');

onMounted(() => {
  if (isNotNil(userStore.user)) {
    bookmarkStore.getBookmarks(userStore.user.id);
  }
});
function handleSubmit() {
  if (isNotNil(userStore.user)) {
    bookmarkStore.addBookmark(userStore.user.id, bookmarkUrl.value);
    bookmarkUrl.value = '';
  }
}
</script>

<template>
  <AppHeader />
  <div>This is the dashboard</div>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="https://www.google.com"
      v-model.trim="bookmarkUrl"
    />
    <button type="submit">Add a new bookmark</button>
  </form>
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
