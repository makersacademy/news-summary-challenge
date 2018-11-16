describe("Article", function() {
  var article = new Article(1, 'this is a news article');
  describe(".initialize", function() {
    it("initializes with an id", function() {
      expect(article.id).toBe(1);
    });
  });
});
