describe('News App', () => {

  var news;
  var headline = 'This is Braeking News'

  beforeEach(function(){
    news = new News(headline)
  })

  it('should be able to create news Object', () => {
    // console.log('Logging this ', news.newsBody)
    expect(news.newsBody).toEqual(headline)
  })

  it('should be able to have news array empty at start', () => {
    // console.log(news.newsArray)
    expect(news.newsArray.length).toEqual(0)
  })

})
