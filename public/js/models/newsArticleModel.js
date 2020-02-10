(function(exports) {
  function NewsArticle(headline, image, URL, apiURL, id) {
    this.headline = headline
    this.image = image
    this.id = id
    this.URL = URL
    this.apiURL = apiURL
  }

  NewsArticle.prototype = {
    viewHeadline: function() {
      return this.headline
    },

    viewApiURL: function() {
      return this.apiURL
    },

    viewImage: function() {
      return this.image
    },

    viewId: function() {
      return this.id
    },

    viewURL: function() {
      return this.URL
    }
  }

  exports.NewsArticle = NewsArticle
})(this)