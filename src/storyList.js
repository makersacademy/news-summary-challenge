(function(exports) {
  function StoryList() {
    this.list = [];
  }

  StoryList.prototype.addStory = function(story) {
    this.list.push(story)
  }

  exports.StoryList = StoryList;
})(this);
