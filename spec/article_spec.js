describe('Article', () => {
  describe('.showContent()', () => {
    it('returns content', () => {
      article = new Article('content');
      expect(article.showContent()).toEq('content')
    })
  })
})