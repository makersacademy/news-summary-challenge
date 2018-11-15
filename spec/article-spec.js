describe("Article", function() {
  var article = new Article(1, "http://www.example.com/1", "Headline");
  describe(".url", function() {
    it("returns article URL", function() {
      expect(article.url).toBe("http://www.example.com/1");
    });
  });
});
