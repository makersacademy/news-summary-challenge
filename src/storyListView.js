(function(exports) {
  function StoryListView(storyList) {
    this.storyList = storyList;
  }

  StoryListView.prototype.returnHTML = function () {
    var listHTML = `<ul>`
    var storyArray = this.storyList.storyArray;
    storyArray.forEach(function(story){
      var headline = story.title;
      listHTML += `<li><div>${headline}</div></li>`;
    });
    listHTML += `</ul>`
    return listHTML
  };

  exports.StoryListView = StoryListView;
})(this);
