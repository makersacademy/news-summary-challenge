describe('ArticleListView', () => {
  describe('#toHTML', () => {
    it('should convert an ArticleList to HTML', () => {
      var articleList = new ArticleList()
      var articleListView = new ArticleListView(articleList)
      articleList.createArticle('first article')
      articleList.createArticle('second article')
      var article_1 = '<li><div>first article</div></li>'
      var article_2 = '<li><div>second article</div></li>'

      expect(articleListView.toHTML()).toEq(`<ul>${article_1}${article_2}</ul>`)
    })
  })
})
