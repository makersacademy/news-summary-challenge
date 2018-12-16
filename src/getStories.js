function GetStories() {this.storyList = new StoryList;};


GetStories.prototype.createController = function (storyList) {
  storyListView = new StoryListView(storyList);
  var controller = new StoryController(storyListView);
  controller.updateText();
};

GetStories.prototype.storiesAPI = function (url) {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(stories) {
    var results = stories.response.results;
    for(var i = 0; i < results.length; i++){
      story = new Story(results[i].webTitle, results[i].webUrl)
      this.storyList.addStory(story);
    };
  });
  return this.storyList;
};
