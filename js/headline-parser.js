(function(exports) {
  function HeadlineParser(articleCollection) {
    this.articleCollection = articleCollection;
  }

  HeadlineParser.prototype = {
    extractHeadlines: function(response) {
      var articles = response.response.results;
      var self = this;
      return articles.map(function(article) {
        self.articleCollection.createArticle(article.webTitle,
                                             article.webUrl,
                                             article.webPublicationDate);
        return { headline: article.webTitle, url: article.webUrl };
      });
    }
  }

  exports.HeadlineParser = HeadlineParser;
})(this);
