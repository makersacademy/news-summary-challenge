describe('News', () => {

  var news;
  var headline = 'Todays News: breaking news, features, analysis and debate plus audio and video content from England, Scotland, Wales and Northern Ireland.'

  beforeEach(function(){
    news = new News(headline)
  })

  describe('News Model', () => {
    it('should be able to create news Object', () => {
      expect(news.newsBody).toEqual(headline)
    })

    it('should be able to return news object as 40 charackters long', () => {
      expect(news.preview()).toEqual('Todays News: breaking news, features, an...')
    })

  })

})
