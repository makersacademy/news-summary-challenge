describe('Articles Class', function() {
  describe('#getArray', function() {
    it('should return the articles result array', function() {
      let results = ['result 1','result 2'];
      let articles = new Articles()
      articles.add('result 1')
      articles.add('result 2')
      expect(articles.getArray()).toEqual(results)
    })
  })
})
