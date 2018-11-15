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
    console.log(news.formattedArticles)
    it("returns a list of articles with headlines",function(){
      return expect(news.formattedArticles[1].headline).toEqual("Trump promise to leave nuclear deal could be bargaining move, Corker says")
    })
    it("returns a list of articles with links",function(){
      return expect(news.formattedArticles[1].link).toEqual("https://www.theguardian.com/world/2018/oct/21/trump-nuclear-deal-talks-corker-nafta")
    })
    it("returns a list of articles with thumbnails",function(){
      return expect(news.formattedArticles[1].thumbnail).toEqual("https://media.guim.co.uk/a9a983fb83ddea9d51c7e9fc832701da32332d12/0_93_2315_1389/500.jpg")
    })
  })

})
