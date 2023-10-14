import { HTTP } from '@/helpers/constants';
import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (_, res, ctx) => {
    return res(ctx.status(HTTP.OK), ctx.json({ name: 'John Doe', id: '1' }));
  }),
];
