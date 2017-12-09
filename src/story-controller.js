(function(exports){
  function StoryController(storyData = new StoryData()) {
  this._storyData = storyData;
}

  StoryController.prototype.htmlInserter = function() {
    var ulString = this._storyData.webTitlesUlArray();
    var link = document.getElementById('link');
    link.innerHTML = ulString;
  };

  exports.StoryController = StoryController;

})(this);
  var storyController = new StoryController();
  storyController.htmlInserter();

makeUrlChangeShowStoryForCurrentPage();

function makeUrlChangeShowStoryForCurrentPage(){
  window.addEventListener("hashchange", showStoriesForCurrentPage);
}

function showStoriesForCurrentPage(){
  showStory(getStoryFromUrl(window.location));
}

function getStoryFromUrl(location){
  return location.hash.split("#")[1];
}

function showStory(story) {
  document
    .getElementById("story")
    .innerHTML = storyController._storyData.getWebUrlAtIndex(story);
}
