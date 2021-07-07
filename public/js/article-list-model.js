(function (exports) {
  function ArticleList () {
    this._list = []
  }

  ArticleList.prototype.addArticle = function (articleData) {
    this._list.push(new Article(articleData))
  }

  ArticleList.prototype.getArticles = function () {
    return this._list
  }


  exports.ArticleList = ArticleList
})(this)