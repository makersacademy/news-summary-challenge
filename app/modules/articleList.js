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

  }

  exports.ArticleList = ArticleList
})(this)