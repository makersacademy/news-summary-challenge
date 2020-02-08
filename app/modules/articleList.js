(function (exports) {
  class ArticleList {
    constructor () {
      this._list = []
    }

    addArticle (article) {
      return this._list.push(article)
    }
  }

  exports.ArticleList = ArticleList
})(this)