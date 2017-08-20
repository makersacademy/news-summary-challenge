(function(exports) {
  function ArticleCollection(articleConstructor) {
    this._articles = [];
    this._articleConstructor = articleConstructor;
  }

  ArticleCollection.prototype = {
    createArticle: function(headline, url, publicationDate) {
      var article = new this._articleConstructor(headline, url, publicationDate)
      this._articles.push(article);
    },
    articles: function() {
      return this._articles;
    }
  }
  exports.ArticleCollection = ArticleCollection;
})(this);
