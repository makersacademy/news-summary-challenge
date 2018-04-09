describe('Headlines class test', function() {

    it('stores a headline', function() {
        testHeadlines = new Headlines();
        testHeadlines.add('Oh my gosh, the news!');
        expect(testHeadlines.all()).toContain('Oh my gosh, the news!')   
    });

});