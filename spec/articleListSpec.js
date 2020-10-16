describe('ArticleList', () => {

  describe('this.articles', () => {
    it('stores an array of articles', () => {
      articleList = new ArticleList();
      expect(articleList.articles).toBeTypeOfArray();
    })
  })
  
})