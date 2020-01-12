(function (exports) {
  var idCounter = 0
  function ArticleModel (articleData) {
    this._articleData = articleData
    this._id = idCounter
    idCounter++
  }

  ArticleModel.prototype.getId = function () {
    return this._id
  }

  ArticleModel.prototype.getData = function () {
    return this._articleData
  }

  exports.ArticleModel = ArticleModel
})(this)