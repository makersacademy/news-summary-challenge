(function(exports) {
  function StoryList() {
    this.storyArray = [];
  }

  StoryList.prototype.addStory = function (apiResponse) {
    var apiResults = apiResponse.response.results;
    var storyArray = []
    apiResults.forEach(function(story) {
      var title = story.webTitle;
      storyArray.push(new Story(title));
    });
    this.storyArray = storyArray
  };

  exports.StoryList = StoryList;
})(this);
