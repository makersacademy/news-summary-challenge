// document.addEventListener("load", getFromGuardian());

function GetStories() {this.storyList = new StoryList;};

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
  console.log("complete")
  return this.storyList;
};
