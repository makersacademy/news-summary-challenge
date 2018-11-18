(function(exports) {
  function ArticleList() {
    this.list = [];
    this.index = 0;
  }

  ArticleList.prototype.addArticle = function(article) {
    article.addId(this.index);
    this.index ++;
    this.list.push(article);
  }

  ArticleList.prototype.getAll = function(article) {
    return this.list;
  }

  ArticleList.prototype.findById = function(id) {
    return this.list[id];
  }

  exports.ArticleList = ArticleList;
})(this);
