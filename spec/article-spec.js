describe("Article", function() {
  var article = new Article(1, 'this is a news article');
  describe(".initialize", function() {
    it("initializes with an id", function() {
      expect(article.id).toBe(1);
    });
    it("initialize with headline", function() {
      expect(article.headline).toBe('this is a news article');
    });
  });
});
