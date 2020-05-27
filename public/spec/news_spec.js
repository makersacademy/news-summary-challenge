describe('News App', () => {

  var news;
  var headline = 'This is Braeking News'

  beforeEach(function(){
    news = new News(headline)
  })

  it('should be able to create news Object', () => {
    console.log('Logging this ', news.body)
    expect(news.body).toEqual(headline)
  })

})
