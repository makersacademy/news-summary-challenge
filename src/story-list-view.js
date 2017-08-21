(function(exports) {
  "use strict";

  function StoryListView(storyList) {
    this._storyList = storyList;
  }

  StoryListView.prototype = {
    toHtml: function() {
      var storyListHtml = this._storyList.all().map(function(story) {
        var imageHtml = "<img class='thumbnail' src='" + story.url() + "'></br>";
        var titleHtml = "<a href='#stories/" + story.id() + "'><h3>" + story.title() + "</h3></br></a>";
        var html = "<div class='story'>" + imageHtml + titleHtml + "</div>";
        return html;
      });
      return storyListHtml.join("");
    }
  };

exports.StoryListView = StoryListView;
})(this);
