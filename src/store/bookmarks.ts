import { fetcher } from '@/helpers/functions';
import { Bookmark, Maybe } from '@/types';
import { defineStore } from 'pinia';

type FetchedBookmarks = Record<'bookmarks', Array<Bookmark>>;

export const useBookmarkStore = defineStore('bookmarks', {
  state: () => {
    return {
      bookmarks: null as Maybe<Array<Bookmark>>,
    };
  },

  actions: {
    getBookmarks(id: string) {
      fetcher<FetchedBookmarks>(`/bookmarks/${id}`).then(({ bookmarks }) => {
        if (bookmarks.length > 0) {
          this.bookmarks = bookmarks;
        }
      });
    },
  },
});
