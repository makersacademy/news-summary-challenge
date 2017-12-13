(function (exports) {

  function Article(url, id, title, thumbnail, body) {
    this._url = url
    this._id = id
    this._title = title
    this._thumbnail = thumbnail
    this._body = body
  }

  Article.prototype.getURL = function() {
    return this._url
  }

  Article.prototype.getID = function() {
    return this._id
  }

  Article.prototype.getTitle = function() {
    return this._title
  }

  Article.prototype.getThumbnail = function() {
    return this._thumbnail
  }

  Article.prototype.getBody = function() {
    return this._body
  }

  exports.Article = Article
})(this);
