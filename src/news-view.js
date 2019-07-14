function NewsView(stories) {
  this.stories = stories
}

NewsView.prototype = {
  render: function() {
    var headlines = this.stories.map(function(story){return story.headline})
    var pageText = headlines.join(" ")
    return pageText
  }
}