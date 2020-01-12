describe('ArticleList', () => {
  describe('#createArticle', () => {
    it('should create a new Article and store it', () => {
      articleList = new ArticleList()
      articleList.createArticle('title of article')
      
      expect(articleList.show()[0]).isInstanceOf(Article)
    })
  })
})
