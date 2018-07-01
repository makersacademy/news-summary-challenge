(function(exports) {
  function StoryList() {
    this.storyArray = [];
  }

  StoryList.prototype.addStory = function (apiResponse) {
    var apiResults = apiResponse.response.results;
    var storyArray = []
    apiResults.forEach(function(story) {
      var title = story.webTitle;
      var url = story.webUrl;
      var image = story.fields.thumbnail;
      storyArray.push(new Story(title, url, image));
    });
    this.storyArray = storyArray
  };

  exports.StoryList = StoryList;
})(this);
