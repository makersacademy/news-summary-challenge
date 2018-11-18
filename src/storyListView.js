(function(exports) {
  function StoryListView(listOfStories) {
    this.storyList = listOfStories.list;
    view = "";
  };

  StoryListView.prototype.returnList = function () {
    view += "<ul>";
    for(var x = 0; x < this.storyList.length; x++) {
      view += `<li><div id='${x}'><a href='${this.storyList[x].url}'>${this.storyList[x].headline}</a></div></li>`
    }
    view += "</ul>";
    return view;
  };

  exports.StoryListView = StoryListView;
})(this);
