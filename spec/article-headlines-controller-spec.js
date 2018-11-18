describe("ArticleHeadlinesController", function() {
  var articleList = new ArticleList();
  var articleHeadlinesController = new ArticleHeadlinesController(articleList);
  describe(".render()", function() {
    it("should add the list of articles to a div on page", function() {
      var htmlMock = { innerHTML: "string" };
      document.getElementById = function() { return htmlMock; };
      var articleList = new ArticleList();
      articleHeadlinesController.articleListView = new ArticleListView(articleList);
      articleHeadlinesController.render();
      expect(htmlMock.innerHTML).toBe("<ul></ul>");
    });
    it("should have a link in the div on page", function() {
      var htmlMock = { innerHTML: "string" };
      document.getElementById = function() { return htmlMock; };
      var articleList = new ArticleList();
      articleList.create("this is an article", "www.google.com");
      articleHeadlinesController.articleListView = new ArticleListView(articleList);
      articleHeadlinesController.render();
      expect(htmlMock.innerHTML).toBe("<ul><li><a href='www.google.com'>this is an article</a></li><a href='#article/0'>Click here for summary</a></ul>");
    });
  });
});
