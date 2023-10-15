import { HTTP } from '@/helpers/constants';
import { rest } from 'msw';
import { users } from './data';
import { isNil } from '@/helpers/functions';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
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
];
