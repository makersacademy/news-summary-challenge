(function (exports) {

  function ArticleList(article = Article) {
    this._article = article
    this._allArticles = []
  }

  ArticleList.prototype.returnAllArticles = function() {
    return this._allArticles
  }

  ArticleList.prototype.createNewArticleAndAddToList = function(url, id, title, thumbnail, body) {
    this._allArticles.push(this._createNewArticle(url, id, title, thumbnail, body))
  }

// PRIVATE

  ArticleList.prototype._createNewArticle = function(url, id, title, thumbnail, body) {
    return new this._article(url, id, title, thumbnail, body)
  }

  exports.ArticleList = ArticleList
})(this);
``
