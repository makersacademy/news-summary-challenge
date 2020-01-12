(function (exports) {
  var idCounter = 0
  function Article (articleData) {
    this._articleData = articleData
    this._id = idCounter
    idCounter++
  }

  Article.prototype.getId = function () {
    return this._id
  }

  Article.prototype.getData = function () {
    return this._articleData
  }

  exports.Article = Article
})(this)