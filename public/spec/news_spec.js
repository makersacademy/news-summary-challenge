describe('News App', () => {

  var news;
  var headline = 'Todays News: breaking news, features, analysis and debate plus audio and video content from England, Scotland, Wales and Northern Ireland.'

  beforeEach(function(){
    news = new News(headline)
    data = new NewsData()
  })

  describe('News Model', () => {
    it('should be able to create news Object', () => {
      // console.log('Logging this ', news.newsBody)
      expect(news.newsBody).toEqual(headline)
    })

    it('should be able to return news object as 40 charackters long', () => {
      expect(news.preview()).toEqual('Todays News: breaking news, features, an...')
    })

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
