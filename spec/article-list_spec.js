describe('ArticleList', () => {
  describe('.addArcticle()', () => {
    it('adds an article', () => {
      var articleList = new ArticleList();
      var article = "This is an article"
      articleList.addArticle(article)
      expect(articleList.articles).toInclude(article)
    })
  })

  describe('.showArticles()', () => {
    it('shows all articles', () => {
      var articleList = new ArticleList();
      var article1 = "This is article 1"
      var article2 = "This is article 2"
      articleList.addArticle(article1)
      articleList.addArticle(article2)
      expect(articleList.showArticles()).toInclude(article1)
      expect(articleList.showArticles()).toInclude(article2)
    })
  })
})