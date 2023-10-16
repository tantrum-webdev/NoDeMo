interface User {
  name: string;
  password: string;
  userName: string;
  id: string;
}

export const users: Array<User> = [
  { name: 'allandrow', password: '1234', userName: 'Cyril', id: '1' },
  { name: 'pwaps', password: '1234', userName: 'Antoine', id: '2' },
];
