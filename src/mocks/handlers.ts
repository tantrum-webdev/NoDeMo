import { HTTP } from '@/helpers/constants';
import { rest } from 'msw';
import { users } from './data';
import { isNil } from '@/helpers/functions';
import { User } from '@/types';

export const handlers = [
  rest.post<User>('/login', (req, res, ctx) => {
    return req.json().then(({ name, password }) => {
      const user = users.find(
        (user) => user.name === name && user.password === password,
      );

      if (isNil(user)) {
        return res(
          ctx.status(HTTP.UNAUTHORIZED),
          ctx.json({ errorMessage: 'The name or password was incorrect' }),
        );
      }

      return res(
        ctx.status(HTTP.OK),
        ctx.json({ name: user.userName, id: user.id }),
      );
    });
  }),

  rest.post('/register', (req, res, ctx) => {
    return req.json().then(({ name, password }) => {
      const maxId = users.reduce((max, user) => {
        const id = parseInt(user.id, 10);
        return id > max ? id : max;
      }, -Infinity);

      const user = { id: String(maxId + 1), name, password, userName: name };
      users.push(user);

      return res(
        ctx.status(HTTP.CREATED),
        ctx.json({ id: user.id, name: user.userName }),
      );
    });
  }),
];
