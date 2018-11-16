describe("ArticleListView", function() {
  beforeEach(setupTestVariables);
  describe(".render()", function() {
    it("returns html list of hyperlinked headlines", function() {
      var htmlList = "<ul><li><div class='article-image'><img src='http://img1.com'></div><div class='article-headline'><a href='#articles/1'>Headline1</a></div><div class='article-content' id='content-1'></div></li><li><div class='article-image'><img src='http://img2.com'></div><div class='article-headline'><a href='#articles/2'>Headline2</a></div><div class='article-content' id='content-2'></div></li></ul>"
      expect(articleListView.render()).toBe(htmlList);
    });
  });
});
