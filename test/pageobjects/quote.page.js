const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuotePage extends Page {
    /**
     * define selectors using getter methods
     */
    get quoteContent() {
        return $('#quote-content');
    }
    get quoteAuthor() {
        return $('#quote-author');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('/');
    }
}

module.exports = new QuotePage();
