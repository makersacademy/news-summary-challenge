(function(exports) {
  function ArticleList() {
    this.list = [];
  }

  ArticleList.prototype.addArticle = function(article) {
    this.list.push(article);
  }

  ArticleList.prototype.getAll = function(article) {
    return this.list;
  }

  exports.ArticleList = ArticleList;
})(this);
