describe('SingleArticleView', () => {
  describe('.returnHTML()', () => {
    it('returns in HTML the article summary', () => {
      var singleArticleView = new SingleArticleView(new Article('Article 1'))
      expect(singleArticleView.returnHTML()).toEq('<div>summary</div>')
    })
  })
})