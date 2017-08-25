(function(exports) {
  function HeadlineParser(articleList) {
    this.articleList = articleList;
  }

  HeadlineParser.prototype = {
    extractArticle: function(response) {
      var self = this;
      var articles = JSON.parse(response).response.results;
      articles.forEach(function(article) {
        self.articleList.createArticle(article.webTitle, article.webUrl, article.webPublicationDate, article.fields.thumbnail, article.fields.bodyText);
      });
      return this.returnArticles();
    },
    returnArticles: function() {
      return this.articleList.displayList();
    }
  };

  exports.HeadlineParser = HeadlineParser;
})(this);
