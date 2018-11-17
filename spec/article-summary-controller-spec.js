describe("ArticleSummaryController", function() {
  var article = new Article(0, "this is an article", "www.google.com", "this is a summary");
  var articleSummaryController = new ArticleSummaryController(article);
  describe(".render", function() {
    it("should add the summary of an article to the page", function() {
      var htmlMock = { innerHTML: "string" };
      document.getElementById = function() { return htmlMock; };
      articleSummaryController.articleSummaryView = new ArticleSummaryView(article);
      articleSummaryController.render();
      expect(htmlMock.innerHTML).toBe("<div>this is a summary</div>");
    });
  });
});
