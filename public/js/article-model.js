(function (exports) {
  var idCounter = 0
  function ArticleModel () {
    this._articleData
    this._id = idCounter
    idCounter++
  }

  ArticleModel.prototype.getId = function () {
    return this._id
  }

  exports.ArticleModel = ArticleModel
})(this)