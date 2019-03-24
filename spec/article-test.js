describe("Article", function() {

    var data = { response:
                  { results: [
                      { webTitle: "Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!",
                        id: "sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live",
                        webUrl: "https://www.theguardian.com/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live"
                      }]
                  }
                }
    var result = data.response.results[0]

  it("takes the text of an article when object is created", function() {
    var article = new Article(result.webTitle, result.id, result.webUrl);
    expect(article.headline).toEqual("Sri Lanka v England: hosts seven down chasing 301 to win second Test – live!");
  });

  it("gives article id when object is created", function() {
    var article = new Article(result.webTitle, result.id, result.webUrl);
    expect(article.id).toEqual("sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live");
  });

  it("gives article url when object is created", function() {
    var article = new Article(result.webTitle, result.id, result.webUrl);
    expect(article.url).toEqual("https://www.theguardian.com/sport/live/2018/nov/17/sri-lanka-v-england-third-test-day-four-live");
  });
});
