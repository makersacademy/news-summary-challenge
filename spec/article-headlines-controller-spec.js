describe("ArticleHeadlinesController", function() {
  var articleList = new ArticleList();
  var articleHeadlinesController = new ArticleHeadlinesController(articleList);
  describe(".initialize", function() {
    it("should take an article list object as a parameter and assign it to a constructor property of this.articleList", function() {
      expect(articleHeadlinesController.articleList).toBe(articleList);
    });
  });
});
