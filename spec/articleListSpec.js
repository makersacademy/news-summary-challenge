describe('ArticleList', () => {

  describe('this.articles', () => {
    it('stores an array of articles', () => {
      articleList = new ArticleList();
      expect(articleList.articles).toBeTypeOfArray();
    })
  })

  describe('.addArticle', () => {
    it('adds an article to the array of articles', () => {
      articleList = new ArticleList();
      articleList.addArticle('Article');
      expect(articleList.articles.length).toEq(1);
    })
  })

  describe('.getArticle', () => {
    articleList = new ArticleList();
    articleList.addArticle('This is an article')
    expect(articleList.getArticles()).toBeTypeOfArray();
  })
})