import { rest } from "msw";

export const productHandlers = [
    rest.get('http://example.com', (req, res, ctx) => {
        return res(ctx.json({ msg: 'It is ok!' }))
      }) 
];
