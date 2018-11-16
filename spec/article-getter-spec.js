describe("ArticleGetter", function() {
  getter = new ArticleGetter();
  describe(".getArticles()", function() {
    it("gets articles from api", function() {
      json.response = {
        results: [
          {webTitle: "HEADLINE1", webUrl: "http://test1.com"},
          {webTitle: "HEADLINE2", webUrl: "http://test2.com"}
        ]
      };
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
