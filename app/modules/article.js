(function (exports) {
  class Article {
    constructor (title, url) {
      this._title = title
      this._url = url
    }
    
    get title () {
      return this._title
    }
    
    get url () {
      return this._url
    }
  }

  exports.Article = Article
})(this)