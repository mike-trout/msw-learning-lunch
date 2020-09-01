const QuotePage = require('../pageobjects/quote.page');

describe('the random quote app', () => {
    it("should display a quote's content", () => {
        QuotePage.open();
        expect(QuotePage.quoteContent).toBeExisting();
        expect(QuotePage.quoteContent).toHaveTextContaining('Like white on rice.');
    });

    it("should display a quote's author", () => {
        QuotePage.open();
        expect(QuotePage.quoteAuthor).toBeExisting();
        expect(QuotePage.quoteAuthor).toHaveTextContaining('Sam Watson');
    });

    it('should not have visually regressed', () => {
        QuotePage.open();
        expect(
            browser.checkScreen('quote page', {
                /* some options */
            })
        ).toEqual(0);
    });
});
