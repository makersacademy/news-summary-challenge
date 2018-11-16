describe('ArticleList', function() {
  it('create a new ArticleList', function() {
    var articleList = new ArticleList()
    expect(articleList).toBeAnInstanceOf(ArticleList);
  });
});
