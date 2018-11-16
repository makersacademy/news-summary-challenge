(function(exports) {
  function ArticleList() {
    this.articles = [];
  }
  ArticleList.prototype.create = function(url, headline) {
    article = new Article(this, this._nextID(), url, headline);
    this.articles.push(article);
    return article;
  };
  ArticleList.prototype.find = function(id) {
    return this.articles.find((article) => {
      return article.id === id;
    });
  };
  ArticleList.prototype._nextID = function() {
    return this.articles.length+1;
  };
  exports.ArticleList = ArticleList;
})(this);
