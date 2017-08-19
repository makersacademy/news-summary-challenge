(function(exports) {
  function HeadlineParser() {}

  HeadlineParser.prototype = {
    extractHeadlines: function(response) {
      var articles = response.response.results;
      return articles.map(function(article) {
        return article.webTitle;
      });
    }
  }

  exports.HeadlineParser = HeadlineParser;
})(this);
