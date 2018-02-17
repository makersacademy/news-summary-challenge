(function(exports) {
  var ArticleIndex = function() {
    this.index = 0
  }

ArticleIndex.prototype = {

getIndex: function() {
    return this.index
  },

increment: function() {
    this.index ++
  },
}

  exports.ArticleIndex = ArticleIndex
})(this)
