(function(object) {
  class Article {
    constructor(title) {
      this._title = title
    }

    title() {
      return this._title
    }
  }

  object.Article = Article
})(this)
