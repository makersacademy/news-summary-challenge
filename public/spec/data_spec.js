describe('News App', () => {

  beforeEach(function(){
    data = new NewsData()
  })

  describe('NewsData Model', () => {
    it('should be able to have news array empty at start', () => {
      expect(data._storedNewsData.length).toEqual(0)
    })

    it('should be able to retrieved data from API', () => {
      expect(data.getDataFromAPI()).notToEqual(undefined)
    })

    it('should be able to return array of data', () => {
      expect(data.viewAllNews()).notToEqual(undefined)
    })

  })

})
