(function(exports) {
  function HeadlineParser(articleCollection) {
    this.articleCollection = articleCollection;
  }

  HeadlineParser.prototype = {
    extractArticles: function(response) {
      var self = this;
      var articles = response.response.results;
      articles.forEach(function(article) {
        self.articleCollection.createArticle(article.webTitle,
                                             article.webUrl,
                                             article.webPublicationDate);
      });
      return this.articleCollection.articles();
    }
  }

  exports.HeadlineParser = HeadlineParser;
})(this);
