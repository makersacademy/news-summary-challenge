(function(object) {
  class Article {
    constructor(title, url) {
      this._title = title
      this._url = url
    }

    title() {
      return this._title
    }

    url() {
      return this._url
    }
  }

  object.Article = Article
})(this)
