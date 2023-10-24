import { fetcher, isNil } from '@/helpers/functions';
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

    addBookmark(id: string, bookmarkUrl: string) {
      fetcher<Bookmark>(`/bookmarks/${id}`, {
        method: 'POST',
        body: JSON.stringify({ url: bookmarkUrl }),
      }).then((bookmark) => {
        if (isNil(this.bookmarks)) {
          this.bookmarks = [bookmark];
        }

        this.bookmarks = [...this.bookmarks, bookmark];
      });
    },
  },
});
