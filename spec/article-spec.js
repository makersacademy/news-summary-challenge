describe("Article", function() {
  describe("on initialization", function() {
    var article1 = new Article(1, "http://www.example.com/1", "Headline");
    it("makes fetch() call with correct url", function() {
      var correctURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://www.example.com/1";
      expect(passedURL).toBe(correctURL);
    });
    it("sets article content to response.json().text", function() {
      // checks content after it has changed
      var interval = setInterval(function() {
        if (article1.content === "not yet loaded") return;
        expect(article1.content).toBe("TEXT");
        clearInterval(interval);
      }, 10);
    });
  });
});
