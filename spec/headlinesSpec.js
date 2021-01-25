describe('Headlines Class', function() {
  describe('#getArray', function() {
    it('should return the headlines result array', function() {
      let results = ['result 1','result 2'];
      let headlines = new Headlines(results)
      expect(headlines.getArray()).toEqual(results)
    })
  })
})
