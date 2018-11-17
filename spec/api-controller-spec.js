describe("APIController", function() {
  apiController = new APIController();
  beforeEach(stubFetch);
  describe(".getArticles()", function() {
    it("gets articles from api", function() {
      var articleListPromise = apiController.getArticles("http://url.com");
      expect(passedURL).toBe("http://url.com");
      articleListPromise.then((promiseValue) => {
        var articles = promiseValue.articles;
        expect(articles[0].url).toBe("http://test1.com");
        expect(articles[1].url).toBe("http://test2.com");
      });
    });
  });
  describe("summarise", function() {
    it("makes fetch() call with correct url and sets article content", function() {
      var correctURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://test1.com";
      var summaryPromise = apiController.summarise(article1);
      summaryPromise.then(() => {
        expect(article1.content).toBe("TEXT");
      });
      expect(passedURL).toBe(correctURL);
    });
  });
});
