(function(exports) {
  function StoryListView(storyList) {
    this.storyList = storyList;
  }

  StoryListView.prototype.returnHTML = function () {
    var listHTML = `<ul>`
    var storyArray = this.storyList.storyArray;
    var counter = 0
    storyArray.forEach(function(story){
      var headline = story.title;
      var url = story.url;
      var image = story.image;
      counter++;
      listHTML += `<li><div><img src=${image}/><a href="#headline/${counter}">${headline}</a></div></li>`;
    });
    listHTML += `</ul>`
    return listHTML
  };

  exports.StoryListView = StoryListView;
})(this);
