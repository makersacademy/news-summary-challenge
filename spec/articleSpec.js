describe('Article', () => {

  describe('.getHeadline', () => {
    it('returns the headline of the article' , () => {
      article = new Article('Breaking news', 'This is the body');
      expect(article.getHeadline()).toEq('Breaking news')
    })
  })

  describe('.getBody', () => {
    it('returns the body of the article', () => {
      article = new Article('Breaking', 'This is a massive news story');
      expect(article.getBody()).toEq('This is a massive news story')
    })
  })

})