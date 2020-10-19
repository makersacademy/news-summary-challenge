describe('Article', () => {

  const article = new Article('Breaking news', 'www.guardian.com', 'thumbnail here')
  
  describe('.getHeadline', () => {
    it('returns the headline of the article' , () => {
      expect(article.getHeadline()).toEq('Breaking news')
    })
  })

  describe('.getUrl', () => {
    it('returns the url of the article', () => {
      expect(article.getUrl()).toEq('www.guardian.com')
    })
  })

})