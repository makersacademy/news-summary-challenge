describe("ArticleView", function() {
  var article1 = new Article(new ArticleList(), 1, "http://www.test.com", "Headline");
  var articleView1 = new ArticleView(article1);

  describe(".render()", function() {
    it("returns html of article content", function() {
      article1.content = "CONTENT"
      expect(articleView1.render()).toBe("<p>CONTENT</p>");
    });
  });
});
