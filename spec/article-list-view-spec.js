describe("ArticleListView", function() {
  beforeEach(setupTestVariables);
  describe(".render()", function() {
    it("returns html list of hyperlinked headlines", function() {
      var htmlList = "<ul><li><img src='http://img1.com'><a href='#articles/1'>Headline1</a></li><li><img src='http://img2.com'><a href='#articles/2'>Headline2</a></li></ul>"
      expect(articleListView.render()).toBe(htmlList);
    });
  });
});
