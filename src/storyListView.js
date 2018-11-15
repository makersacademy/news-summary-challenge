(function(exports) {
  function StoryListView(storyList) {
    this.storyList = storyList;
    view = "";
  };

  StoryListView.prototype.returnList = function () {
    view += "<ul>";
    for(var i = 0; i < this.storyList.length; i++) {
      view += `<li><div id='${i}'>${this.storyList[i]}</div></li>`
    }
    view += "</ul>";
    return view;
  };
  exports.StoryListView = StoryListView;
})(this);
