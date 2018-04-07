describe('Article', function() {
  it('is able to return a headline of an article', function() {
    var article = new Article('A test headline');

    return expect(article.getHeadline()).toEqual('A test headline');
  });

  it('is able to return the body of an article', function() {
    var article = new Article('A test headline', 'A test body');

    return expect(article.getBody()).toEqual('A test body');
  });
});
