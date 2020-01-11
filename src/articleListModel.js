(function(object) {
  class ArticleList {
    constructor() {
      this._articles = []
    }

    articles() {
      return this._articles
    }
  }

  object.ArticleList = ArticleList
})(this)
