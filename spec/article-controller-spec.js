describe("ArticleController", function() {
  beforeEach(setupTestVariables);
  beforeEach(stubGetElementById);

  describe(".loadHTML()", function() {
    it("adds html from article view to location", function() {
      controller.loadHTML(articleView1, "articleContainer");
      expect(htmlMock.articleContainer.innerHTML).toBe("<img src='http://img1.com'><p>TEST_CONTENT1</p>");
    });
    it("adds html from article list view to location", function() {
      controller.loadHTML(articleListView, "articleListContainer");
      expect(htmlMock.articleListContainer.innerHTML).toBe("<ul><li><img src='http://img1.com'><a href='#articles/1'>Headline1</a></li><li><img src='http://img2.com'><a href='#articles/2'>Headline2</a></li></ul>");
    });
  });
  describe("listenForHashChange", function() {
    it("changes articleContainer html on hashchange", function() {
      controller.listenForHashChange("articleContainer");
      window.location.hash = "articles/2";
      var hashchange = new Event("hashchange");
      window.dispatchEvent(hashchange);
      expect(htmlMock.articleContainer.innerHTML).toBe("<img src='http://img2.com'><p>TEST_CONTENT2</p>");
    });
  });
});
