describe("ArticleListView", function() {
  articleList = new ArticleList();
  articleList.create("http://test1.com", "Headline1");
  articleList.create("http://test2.com", "Headline2");
  articleListView = new ArticleListView(articleList);
  describe(".render()", function() {
    it("returns html list of hyperlinked headlines", function() {
      var htmlList = "<ul><li><a href='/articles#1'>Headline1</a></li><li><a href='/articles#2'>Headline2</a></li></ul>"
      expect(articleListView.render()).toBe(htmlList);
    });
  });
});
