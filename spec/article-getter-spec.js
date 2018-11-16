describe("ArticleGetter", function() {
  getter = new ArticleGetter();
  beforeEach(stubFetch);
  describe(".getArticles()", function() {
    it("gets articles from api", function() {
      var articleListPromise = getter.getArticles("http://url.com");
      expect(passedURL).toBe("http://url.com");
      articleListPromise.then((promiseValue) => {
        var articles = promiseValue.articles;
        expect(articles[0].url).toBe("http://test1.com");
        expect(articles[1].url).toBe("http://test2.com");
      });
    });
  });
});
