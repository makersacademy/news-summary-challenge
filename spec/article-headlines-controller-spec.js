describe("ArticleHeadlinesController", function() {
  var articleList = new ArticleList();
  var articleHeadlinesController = new ArticleHeadlinesController(articleList);
  // describe(".initialize", function() {
  //   it("should take an article list object as a parameter and assign it to a constructor property of this.articleList", function() {
  //     expect(articleHeadlinesController.articleList).toBe(0);
  //   });
  //   it("should initialize a new article list view object which takes the same article list object as the controller", function() {
  //     expect(articleHeadlinesController.articleListView instanceof ArticleListView).toBe(true);
  //     expect(articleHeadlinesController.articleListView.articleList).toBe(articleList);
  //   });
  // });
  describe(".render()", function() {
    it("should add the list of articles to a div on page", function() {
      var htmlMock = { innerHTML: "string"};
      document.getElementById = function() { return htmlMock; };
      var articleList = new ArticleList();
      articleHeadlinesController.articleListView = new ArticleListView(articleList);
      articleHeadlinesController.render();
      expect(htmlMock.innerHTML).toBe("<ul></ul>");
    });
  });
});
