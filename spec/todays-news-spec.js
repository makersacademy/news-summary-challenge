(function(exports) {

  (function testTodaysNewsArticles() {
    var todaysNews = new TodaysNews();
    assert.isTrue(
      todaysNews.articles().length == 0,
      "test TodaysNews Stores articles passed"
    );
  })();

})();
