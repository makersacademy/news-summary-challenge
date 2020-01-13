(function (exports) {
  var idCounter = 0
  function Article (articleData) {
    this._articleData = articleData
    this._id = idCounter
    this._summaryData
    idCounter++
  }

  Article.prototype.getId = function () {
    return this._id
  }

  Article.prototype.getData = function () {
    return this._articleData
  }

  Article.prototype.addSummaryData = function (data) {
    this._summaryData = data
  }

  exports.Article = Article
})(this)