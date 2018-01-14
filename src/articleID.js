(function(exports) {
  var ArticleID = function() {
    this.id = 0
  }

  ArticleID.prototype.increment = function() {
    this.id ++
  }

  ArticleID.prototype.getID = function() {
    return this.id
  }

  exports.ArticleID = ArticleID
})(this)
