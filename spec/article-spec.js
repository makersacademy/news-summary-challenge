describe("Article", function() {
  var article = new Article(1, 'this is a news article', 'www.google.com');
  describe(".initialize", function() {
    it("initializes with an id", function() {
      expect(article.id).toBe(1);
    });
    it("initialize with headline", function() {
      expect(article.headline).toBe('this is a news article');
    });
    it("initialize with web url", function() {
      expect(article.webURL).toBe('www.google.com');
    });
  });
  describe(".getSummary", function() {
    it("should return a summary", function() {
      article.createSummary('this is a summary')
      expect(article.summary).toBe('this is a summary')
    })
  })
});
