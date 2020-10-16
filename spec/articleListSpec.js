describe('ArticleList', () => {

  const articleList = new ArticleList();

  describe('this.articles', () => {
    it('stores an array of articles', () => {
      expect(articleList.articles).toBeTypeOfArray();
    })
  })

  describe('.addArticle', () => {
    it('adds an article to the array of articles', () => {
      articleList.addArticle('Article');
      expect(articleList.articles.length).toEq(1);
    })
  })

  describe('.getArticle', () => {
    articleList.addArticle('This is an article')
    expect(articleList.getArticles()).toBeTypeOfArray();
  })
})