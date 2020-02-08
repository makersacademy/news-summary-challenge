(function(exports) {
  function ArticleList() {
    this.list = []
  }
  exports.ArticleList = ArticleList
})(this);

ArticleList.prototype.createAndStore = function(article) {
  this.list.push(article)
}