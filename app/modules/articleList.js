(function (exports) {
  class ArticleList {
    constructor () {
      this._list = []
    }

    get list () {
      return this._list
    }

    add (article) {
      return this._list.push(article)
    }

    find(articleId) {
      return this._list.find(article => article.id === articleId)
    }
  }

  exports.ArticleList = ArticleList
})(this)