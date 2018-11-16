describe("ArticleList", function() {
  var articleList = new ArticleList();

  describe(".articles", function() {
    it("returns an empty array initially", function() {
      expect(articleList.articles.length).toBe(0);
    });
  });
  describe(".create()", function() {
    var article1 = articleList.create("http://www.test.com/1", "Headline1");
    it("adds a new article to .articles", function() {
      expect(articleList.articles.length).toBe(1);
    });
    it("assigns unique serial id", function() {
      var article2 = articleList.create("http://www.test.com/2", "Headline2");
      expect(article1.id).toBe("1");
      expect(article2.id).toBe("2");
    });
  });
  describe(".find()", function() {
    it("finds article with passed ID", function() {
      var article2 = articleList.articles[1];
      expect(articleList.find("2")).toBe(article2);
    });
  });
});
