describe('Article', () => {

  const article = new Article('Breaking news', 'This is a massive news story')
  
  describe('.getHeadline', () => {
    it('returns the headline of the article' , () => {
      expect(article.getHeadline()).toEq('Breaking news')
    })
  })

  describe('.getBody', () => {
    it('returns the body of the article', () => {
      expect(article.getBody()).toEq('This is a massive news story')
    })
  })

})