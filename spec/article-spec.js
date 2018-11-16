describe("Article", function() {
  beforeEach(setupTestVariables);
  beforeEach(stubFetch);
  describe("setContent", function() {
    it("makes fetch() call with correct url", function() {
      var correctURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://test1.com";
      article1.setContent();
      expect(passedURL).toBe(correctURL);
    });
    it("sets article content to response.json().text", function() {
      var interval = setInterval(function() {
        if (article1.content === "not yet loaded") return;
        expect(article1.content).toBe("TEST_CONTENT1");
        clearInterval(interval);
      }, 10);
    });
  });
});
