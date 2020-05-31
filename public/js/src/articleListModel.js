(function(exports) {
  function ArticleList() {
    this.list = []
  }
  ArticleList.prototype.listAll = function() {
    return this.list
  }
  ArticleList.prototype.add = function(headline) {
    let article = new Article(headline)
    this.list.push(article)
    article.id = this.list.indexOf(article)
  }

  exports.ArticleList = ArticleList
})(this)
