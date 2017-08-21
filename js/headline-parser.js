'use strict';

(function(exports) {
  function HeadlineParser(articleCollection) {
    this.articleCollection = articleCollection;
  }

  HeadlineParser.prototype = {
    extractArticles: function(response) {
      var self = this;
      var articles = JSON.parse(response).response.results;
      articles.forEach(function(article) {
        self.articleCollection.createArticle(article.webTitle,
                                             article.webUrl,
                                             article.webPublicationDate,
                                             article.fields.thumbnail);
      });
      return this.returnArticles();
    },
    returnArticles: function() {
      return this.articleCollection.articles();
    }
  }

  exports.HeadlineParser = HeadlineParser;
})(this);
