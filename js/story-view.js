(function(exports) {
  function StoryView(story) {
    this._story = story
  }
  var storiesDiv = document.getElementById("stories");

  StoryView.prototype.toHtml = function() {
    var newSection = document.createElement("section");
    var storyImage = "<img src=" + this._story.image() + ">" ;
    var storySummary = "<button onclick= loadSummary()" + ">View article summary</button>";
    var storyHeadline = "<br>" + "<a href=" + this._story.webUrl() + ">" + this._story.headline() + "</a>"  + "<br>";
    newSection.innerHTML += storyImage + storySummary + storyHeadline;
    return newSection;
  };

  StoryView.prototype.displayStory = function() {
    var newSection = this.toHtml();
    storiesDiv.append(newSection);
  }

  exports.StoryView = StoryView;
})(this);
