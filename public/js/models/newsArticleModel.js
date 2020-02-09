(function(exports) {
  function NewsArticle(headline, image, body, id) {
    this.headline = headline
    this.image = image
    this.body = body
    this.id = id
  }

  NewsArticle.prototype = {
    viewNote: function() {
      return this.headline
    }
  }

  exports.NewsArticle = NewsArticle
})(this)