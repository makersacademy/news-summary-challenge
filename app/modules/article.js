(function (exports) {
  class Article {
    constructor (title, url, body) {
      this._title = title
      this._url = url
      this._body = body
    }
    
    get title () {
      return this._title
    }
    
    get url () {
      return this._url
    }

    get body () {
      return this._body
    }
  }

  exports.Article = Article
})(this)