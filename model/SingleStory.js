(function(exports) {
  function SingleStory(story) {
    this.story = story
  };

  SingleStory.prototype.getStorySummary = function() {
    summaryMaker.getSummary(this.story.id);
    this.summary = summaryMaker.createSummary()
    return this.summary
  };

  SingleStory.prototype.getStoryThumbnail = function() {
    return `<img src=${this.story.fields.thumbnail}><br>`
  }

  SingleStory.prototype.getFullStoryLink = function() {
    return `<a href=${this.story.webUrl}>read more...</a>`
  }

  exports.SingleStory = SingleStory;

})(this);
