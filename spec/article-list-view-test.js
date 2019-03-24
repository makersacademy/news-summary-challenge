describe("ArticleListView", function() {

    var data = { response:
                  { results: [
                      { webTitle: "Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!",
                        id: "sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live",
                        webUrl: "https://www.theguardian.com/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live"
                      }]
                  }
                }
    var result = data.response.results[0]

  it("takes a article list upon instantiation", function() {
    var articleList = new ArticleList()
    var articleListView = new ArticleListView(articleList);
    expect(articleListView.articleList).toEqual(articleList)
  })

  it("returns the view in html", function() {
    var articleList = new ArticleList();
    articleList.add(data)
    var articleListView = new ArticleListView(articleList)
    expect(articleListView.getHTML()).toEqual("<li><div><a href='http://localhost:8080#articles/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live'>Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!</a></div></li>")
  })

})
