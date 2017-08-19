(function(exports) {
  function HeadlineParser() {}

  HeadlineParser.prototype = {
    extractHeadlines: function(response) {
      var articles = response.response.results;
      return articles.map(function(article) {
        return { headline: article.webTitle, url: article.webUrl };
      });
    }
  }

  exports.HeadlineParser = HeadlineParser;
})(this);
