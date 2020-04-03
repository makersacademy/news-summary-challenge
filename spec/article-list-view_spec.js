describe('ArticleListView', () => {
  describe('.returnHTML()', () => {
    it('returns HTML that represents the article list', () => {
      var articleList = new ArticleList()
      articleList.addArticle(new Article("art1"))
      articleList.addArticle(new Article("art2"))
      var articleListView = new ArticleListView(articleList)
      expect(articleListView.returnHTML()).toEq("<div><a href='#articles/0'>art1</a></div><div><a href='#articles/1'>art2</a></div>")
    })
  })
})