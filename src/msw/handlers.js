import { rest } from 'msw';

const handlers = [
    rest.get('https://quotable.io/random', (req, res, ctx) => {
        return res(
            ctx.json({
                author: 'Sam Watson',
                content: 'Like white on rice.',
            })
        );
    }),
];

export default handlers;
