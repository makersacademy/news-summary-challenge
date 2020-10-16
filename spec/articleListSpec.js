describe('ArticleList', () => {

  describe('this.articles', () => {
    it('stores an array of articles', () => {
      articleList = new ArticleList();
      expect(articleList.articles).toBeTypeOfArray();
    })
  })

  describe('.getArticle', () => {
    it('adds an article to the array of articles', () => {
      articleList = new ArticleList();
      articleList.addArticle('Article');
      expect(articleList.articles.length).toEq(1);
    })
  })

})