(function(exports) {

  function NewsListView(newsStories) {
    this._list = newsStories._newsStoriesArray;
  };

  NewsListView.prototype = {
    format: function() {
      var text = ""
      this._list.forEach(newsStory => {
        text += "<li><div>" + newsStory.title + "</div></li>"
      })
      return "<ul>" + text + "</ul>"
    }
  };

  exports.NewsListView = NewsListView

})(this);
