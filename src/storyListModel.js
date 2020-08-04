(function(exports) {
  
  function StoryList() {
    this.stories = new Array()
  };
  
  StoryList.prototype.create = function(headline,summary) {
    this.stories.push(new Story(headline,summary));
  };
  
  StoryList.prototype.getStories = function() {
    var stories = new Array();
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://content.guardianapis.com/search?api-key=70163cb6-b815-4de0-aa0a-7438a67f0243');
    ourRequest.onload = function() {
      var storyData = JSON.parse(ourRequest.responseText);
      for (i=0; i < 10; i++) {
        stories.push(new Story(storyData.response.results[i].webTitle,"this is the summary of the article"))
      }
    };
    this.stories = stories
    ourRequest.send();
  }
  
  exports.StoryList = StoryList 
})(this)

