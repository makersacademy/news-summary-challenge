(function(exports) {

  (function testTodaysNewsArticles() {
    var todaysNews = new TodaysNews("test");

    assert.isTrue(
      todaysNews.articles().includes("test"),
      "test TodaysNews Stores articles passed"
    );
  })();

})();
