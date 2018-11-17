(function(exports) {
  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.create = function(headline) {
    var article = new Article(this._nextID(), headline);
    this.articles.push(article);
  };

  ArticleList.prototype._nextID = function() {
    return this.articles.length;
  };

  ArticleList.prototype._getLength = function(array) {
    return Object.keys(array).length;
  };

  exports.ArticleList = ArticleList;
})(this);
