describe('Headline', function() {
  it('is able to return a headline', function() {
    var headline = new Headline('Headline');

    return expect(headline.read()).toEqual('Headline');
  });
});
