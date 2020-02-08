(function (exports) {
  class ArticleList {
    constructor () {
      this._list = []
    }

    add (article) {
      return this._list.push(article)
    }

    get list () {
      return this._list
    }
  }

  exports.ArticleList = ArticleList
})(this)