describe('Feature tests', function () {
    it('has a listing_div element', function() {
        return expect('news_listing_div').toBeHtmlElement();
    });
});