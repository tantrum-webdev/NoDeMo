import { StoredUser, UserBookmarks } from './types';

export const users: Array<StoredUser> = [
  {
    name: 'allandrow',
    password: '1234',
    userName: 'Cyril',
    id: 'f3f506aa-9f2f-4ee2-acf8-32d64be9b5f2',
  },
  {
    name: 'pwaps',
    password: '1234',
    userName: 'Antoine',
    id: 'f5f57137-0ea4-4f18-9e79-83e5f40b0047',
  },
];

export const bookmarks: UserBookmarks = {
  'f3f506aa-9f2f-4ee2-acf8-32d64be9b5f2': [
    {
      cover:
        'https://www.joshwcomeau.com/images/og-make-beautiful-gradients.png',
      title:
        'Make Beautiful Gradients in CSS, with linear-gradient, radial-gradient, or conic-gradient.',
      url: 'https://www.joshwcomeau.com/css/make-beautiful-gradients/',
      date: 1697897825669,
      id: 'dd9d8a09-de4b-4262-8dcd-ac11d67d7681',
    },
    {
      cover:
        'https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png',
      title: 'open-graph-scraper - npm',
      url: 'https://www.npmjs.com/package/open-graph-scraper',
      date: 1697898543933,
      id: '3ab84dff-2d50-4922-a263-077962091b79',
    },
  ],
  'f5f57137-0ea4-4f18-9e79-83e5f40b0047': [],
};
