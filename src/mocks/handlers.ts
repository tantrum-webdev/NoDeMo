import { rest } from 'msw';

const http = {
  ok: 200,
};

export const handlers = [
  rest.post('/login', (_, res, ctx) => {
    return res(ctx.status(http.ok), ctx.json({ name: 'John Doe', id: '1' }));
  }),
];
