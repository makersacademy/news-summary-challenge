(function(exports) {
  "use strict";

  function StoryListView(storyList) {
    this._storyList = storyList;
  }

  StoryListView.prototype = {
    toHtml: function() {
      var storyListHtml = this._storyList.all().map(function(story) {
        var imageHtml = "<img src='" + story.url() + "'></br>";
        var titleHtml = "<h2>" + story.title() + "</h2></br>";
        var html = "<div class='story'>" + imageHtml + titleHtml + "</div>";
        return html;
      });
      return storyListHtml.join("");
    }
  };

exports.StoryListView = StoryListView;
})(this);
