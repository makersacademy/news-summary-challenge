describe('News App', () => {

  beforeEach(function(){
    data = new NewsData()
  })

  describe('NewsData Model', () => {
    it('should be able to have news array empty at start', () => {
      expect(data.newsArray.length).toEqual(0)
    })

    it('should be able to retrieved data from API', () => {
      expect(data.getData()).notToEqual(undefined)
    })

  })

})
