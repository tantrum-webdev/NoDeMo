import { rest } from 'msw';

const http = {
  ok: 200,
};

export const handlers = [
  rest.post('/login', (_, res, ctx) => {
    console.log('GOT REQ');
    return res(ctx.status(http.ok));
  }),
];
