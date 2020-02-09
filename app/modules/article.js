(function (exports) {
  class Article {
    constructor (title, url, body, summary, id) {
      this._title = title
      this._url = url
      this._body = body
      this._summary = summary
      this._id = id
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

    get id () {
      return this._id
    }
  }

  exports.Article = Article
})(this)