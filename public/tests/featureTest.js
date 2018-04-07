describe('Feature tests', function () {
    it('has a listing_div element', function() {
        return expect('listing_div').toBeHtmlElement();
    });
});