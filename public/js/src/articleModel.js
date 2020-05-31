(function(exports) {
  function ArticleModel(headline) {
    this.headline = headline
  }
  ArticleModel.prototype.show = function() {
    return this.headline;
  }

  exports.ArticleModel = ArticleModel
})(this)
