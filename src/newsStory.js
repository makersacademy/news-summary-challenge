(function(exports) {
  function NewsStory(headline, id) {
    this.headline = headline
    this.id = id
  }

  NewsStory.prototype.getHeadline = function() {
    return this.headline
  }

  NewsStory.prototype.getId = function() {
    return this.id
  }

  exports.NewsStory = NewsStory
})(this)
