describe('News App', () => {

  var news;
  var headline = 'This is Braeking News'

  beforeEach(function(){
    news = new News(headline)
    data = new NewsData()
  })

  describe('News Model', () => {
    it('should be able to create news Object', () => {
      // console.log('Logging this ', news.newsBody)
      expect(news.newsBody).toEqual(headline)
    })

  })

  describe('NewsData Model', () => {
    it('should be able to have news array empty at start', () => {
      expect(data.newsArray.length).toEqual(0)
    })

    it('should be able to retrieved data from API', () => {
      expect(data.getData()).notToEqual(undefined)
    })

    // news.receiveNews()
    // expect(news.newsArray.length).notToEqual(0)

  })



})
