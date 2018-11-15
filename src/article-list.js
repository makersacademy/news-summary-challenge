(function(exports) {
  function ArticleList() {
    this.articles = [];
  }
  ArticleList.prototype.create = function(url, headline) {
    article = new Article(this._nextID(), url, headline);
    this.articles.push(article);
    return article;
  };
  ArticleList.prototype._nextID = function() {
    return this.articles.length+1;
  };
  exports.ArticleList = ArticleList;
})(this);
