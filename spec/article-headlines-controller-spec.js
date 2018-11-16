describe("ArticleHeadlinesController", function() {
  var articleList = new ArticleList();
  var articleHeadlinesController = new ArticleHeadlinesController(articleList);
  describe(".initialize", function() {
    it("should take an article list object as a parameter and assign it to a constructor property of this.articleList", function() {
      expect(articleHeadlinesController.articleList).toBe(articleList);
    });
    it("should initialize a new article list view object which takes the same article list object as the controller", function() {
      expect(articleHeadlinesController.articleListView instanceof ArticleListView).toBe(true);
      expect(articleHeadlinesController.articleListView.articleList).toBe(articleList);
    });
  });
});
