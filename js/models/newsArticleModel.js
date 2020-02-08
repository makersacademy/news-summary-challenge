(function(exports) {
  function NewsArticle(headline, id) {
    this.headline = headline
    this.id = id
  }

  NewsArticle.prototype = {
    viewNote: function() {
      return this.headline
    }
  }

  exports.NewsArticle = NewsArticle
})(this)