(function(exports) {
  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.create = function(headline, webURL, summary) {
    var article = new Article(this._nextID(), headline, webURL, summary);
    this.articles.push(article);
  };

  ArticleList.prototype._nextID = function() {
    return this.articles.length;
  };

  exports.ArticleList = ArticleList;
})(this);
