describe('ArticleList', function() {
  it('create a new ArticleList', function() {
    var articleList = new ArticleList()
    expect(articleList).toBeAnInstanceOf(ArticleList);
  });

  describe('#getArticles', function() {
    it('returns the stored articles', function() {
      var articleList = new ArticleList()
      var double = "Article"
      articleList.articles = [double]

      expect(articleList.getArticles()[0]).toEqual(double);
    });
  });

  describe('#add', function() {
    it('adds an article to the articleList', function() {
      var articleList = new ArticleList()
      articleList.add("Headline", "Body")

      expect(articleList.getArticles()[0].getHeadline()).toEqual('Headline');
      expect(articleList.getArticles()[0].getBody()).toEqual('Body');

    });
  });
});
