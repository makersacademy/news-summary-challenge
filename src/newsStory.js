(function(exports) {
  function NewsStory(headline, id) {
    this.headline = headline
    // this.text = text
    this.id = id
  }

  NewsStory.prototype.getHeadline = function() {
    return this.headline
  }

  // NewsStory.prototype.getText = function() {
  //   return this.text
  // }

  NewsStory.prototype.getId = function() {
    return this.id
  }

  exports.NewsStory = NewsStory
})(this)
