describe("Article", function() {

// API Stub Setup

  // track whether fetch is called with correct URL
  var correctURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://www.example.com/1";
  var fetchedCorrectURL = false;

  // stub fetch() to return a promise with custom response object
  var json = { text: "TEXT" };
  var response = { json: () => { return json; } };
  window.fetch = function(url) {
    if (url === correctURL) { fetchedCorrectURL = true; }
    return new Promise(function(resolve) {
      resolve(response);
    });
  };

  describe("on initialization", function() {
    var article1 = new Article(1, "http://www.example.com/1", "Headline");
    it("makes fetch() call with url and summariser", function() {
      expect(fetchedCorrectURL).toBe(true);
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
