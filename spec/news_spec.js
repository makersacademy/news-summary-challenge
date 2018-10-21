describe("News", function(){
  var mockGetNews = (callback) => {
    callback(null,JSON.stringify(mockResult))
  }
  var mockRender = () => { return null }
  var mockGetSummary = (url,callback) => {
    callback(null,"mock Summary")
  }
  var news = new News(mockGetNews,mockRender,mockGetSummary)


  describe("articles", function(){
    it("has a list of articles",function(){
      return expect(news.articles).toExist()
    })
    it("has a list with 10 articles",function(){
      return expect(news.articles.length).toEqual(10)
    })
  })

  describe("formattedArticles", function(){
    console.log(news)
    it("returns a list of articles with headlines",function(){
      return expect(news.formattedArticles[1].headline).toEqual("Dismayed  journalists condemn Trump for praising assault on Guardian reporter")
    })
    it("returns a list of articles with links",function(){
      return expect(news.formattedArticles[1].link).toEqual("https://www.theguardian.com/us-news/2018/oct/19/trump-greg-gianforte-guardian-reporter-assault")
    })
    it("returns a list of articles with summaries",function(){
      return expect(news.formattedArticles[1].summary).toEqual("mock Summary")
    })
  })

})
