import { StoredUsed } from './types';

export function getNextId(users: Array<StoredUsed>): string {
  const maxId =
    users.reduce((max, user) => {
      const id = parseInt(user.id, 10);
      return id > max ? id : max;
    }, -Infinity) + 1;

  return maxId.toString();
}
