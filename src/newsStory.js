(function(exports) {
  function NewsStory() {
    this.id = "id"
    this.headline = "headline"
    this.summary = "summary"
    this.text = "text"
  }

    NewsStory.prototype.getHeadline = function() {
      return this.headline
    }

  exports.NewsStory = NewsStory
})(this)
