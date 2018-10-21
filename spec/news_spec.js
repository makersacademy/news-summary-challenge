describe("News", function(){
  var mockGetNews = () => {
    return mockResult.response.results
  }
  var news = new News(mockGetNews)

  it("has a list of articles",function(){
    return expect(news.articles).toExist()
  })

  it("has a list with 10 articles",function(){
    return expect(news.articles.length).toEqual(10)
  })
})
