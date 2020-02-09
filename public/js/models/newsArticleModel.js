(function(exports) {
  function NewsArticle(headline, image, body, apiURL, id) {
    this.headline = headline
    this.image = image
    this.body = body
    this.id = id
    this.apiURL = apiURL
  }

  NewsArticle.prototype = {
    viewNote: function() {
      return this.headline
    }
  }

  exports.NewsArticle = NewsArticle
})(this)