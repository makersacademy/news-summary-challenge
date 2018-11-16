describe("ArticleView", function() {
  beforeEach(setupTestVariables);
  describe(".render()", function() {
    it("returns html of article content", function() {
      article1.content = "CONTENT";
      expect(articleView1.render()).toBe("<img src='http://img1.com'><p>CONTENT</p>");
    });
  });
});
