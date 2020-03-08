describe('ArticleListView', () => {
  describe('.returnHTML()', () => {
    it('returns HTML that represents the article list', () => {
      var articleList = new ArticleList()
      articleList.addArticle(new Article("art1"))
      articleList.addArticle(new Article("art2"))
      var articleListView = new ArticleListView(articleList)
      expect(articleListView.returnHTML()).toEq('<ul><li><div>art1</div></li><li><div>art2</div></li></ul>')
    })
  })
})