describe("News", function(){
  var mockGetNews = (callback) => {
    callback(null,JSON.stringify(mockResult))
  }
  var mockRenderLinkedHeadlines = () => { return null }
  var news = new News(mockGetNews,mockRenderLinkedHeadlines)


  describe("articles", function(){
    it("has a list of articles",function(){
      return expect(news.articles).toExist()
    })
    it("has a list with 10 articles",function(){
      return expect(news.articles.length).toEqual(10)
    })
  })

  describe("getLinkedHeadlines", function(){
    it("returns a list of headlines",function(){
      return expect(news.getLinkedHeadlines(mockResult.response.results)[1].headline).toEqual("Dismayed  journalists condemn Trump for praising assault on Guardian reporter")
    })
    it("returns a list of headlines including links",function(){
      return expect(news.getLinkedHeadlines(mockResult.response.results)[1].link).toEqual("https://www.theguardian.com/us-news/2018/oct/19/trump-greg-gianforte-guardian-reporter-assault")
    })
  })

  describe("getSummaries", function(){
    it("returns a list of summaries",function(){
      return expect(news.getLinkedHeadlines(mockResult.response.results)[1].headline).toEqual("Dismayed  journalists condemn Trump for praising assault on Guardian reporter")
    })
    it("returns a list of headlines including links",function(){
      return expect(news.getLinkedHeadlines(mockResult.response.results)[1].link).toEqual("https://www.theguardian.com/us-news/2018/oct/19/trump-greg-gianforte-guardian-reporter-assault")
    })
  })

})
