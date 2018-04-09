describe('Feature tests', function () {
    it('has a listing_div element', function() {
        return expect('news_listing_div').toBeHtmlElement();
    });

    it('has selected_news_div invisible at start', function() {
        return expect('selected_news_div').toNotBeVisible();
    });
});