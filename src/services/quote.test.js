import { getQuote } from './quote';

describe('the random quote app', () => {
    it('returns a random quote', async () => {
        await expect(getQuote()).resolves.toEqual({
            author: 'Sam Watson',
            content: 'Like white on rice.',
        });
    });
});
