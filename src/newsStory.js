(function(exports) {
  function NewsStory(text, id) {
    this.text = text
    this.id = id
    // this.headline = "headline"
    // this.summary = "summary"

  }

    NewsStory.prototype.getText = function() {
      return this.text
    }

  exports.NewsStory = NewsStory
})(this)
