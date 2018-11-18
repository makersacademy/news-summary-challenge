describe("ArticleSummaryView", function() {
  var article = new Article(0, "this is an article", "www.google.com");
  var articleSummaryView = new ArticleSummaryView(article);
  describe(".initialize", function() {
    it("should take an article as a parameter and assign that to a constructor property", function() {
      expect(articleSummaryView.article).toBe(article);
    });
  });
  describe(".html", function() {
    it("should return an html string of the article's summary", function() {
      article.summary = []
      expect(articleSummaryView.html()).toBe("<p></p>")
    });
  });
});
