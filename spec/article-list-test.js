describe("ArticleList", function() {

  var data = { response:
                { results: [
                    { webTitle: "Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!",
                      id: "sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live",
                      webUrl: "https://www.theguardian.com/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live"
                    }]
                }
              }
  var result = data.response.results[0]

  it("stores an array of articles", function() {
    var articleList = new ArticleList();
    expect(articleList.articles.length).toEqual(0);
  });

  it("adds a new article to the array", function() {
    var articleList = new ArticleList();
    articleList.add(data)
    expect(articleList.articles[0].headline).toEqual("Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!")
  })

  it("returns the url of an article when given the id", function() {
    var articleList = new ArticleList();
    articleList.add(data)
    expect(articleList.getUrlById(result.id)).toEqual("https://www.theguardian.com/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live")
  })
});
