describe('Article', function() {
  it('create a new article', function() {
    var article = new Article()
    expect(article).toBeAnInstanceOf(Article);
  });
});
