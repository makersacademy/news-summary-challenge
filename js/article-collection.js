(function(exports) {
  function ArticleCollection(articleConstructor) {
    this._articles = [];
    this._articleConstructor = articleConstructor;
  }

  ArticleCollection.prototype = {
    createArticle: function(headline, url, publicationDate) {
      if(this.articleExists(headline)) { return; }
      var article = new this._articleConstructor(headline, url, publicationDate)
      this._articles.push(article);
    },
    articles: function() {
      return this._articles;
    },
    getArticleById: function(id) {
      return this._articles[id];
    },
    articleExists: function(newHeadline) {
      var exists;
      this.articles().forEach(function(article) {
        if(newHeadline === article.headline()) {
          exists = true;
        }
      });
      return exists;
    }
  }
  exports.ArticleCollection = ArticleCollection;
})(this);
