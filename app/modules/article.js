(function (exports) {
  class Article {
    constructor (title, url, body, summary) {
      this._title = title
      this._url = url
      this._body = body
      this._summary = summary
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

    get summary () {
      return this._summary
    }
  }

  exports.Article = Article
})(this)