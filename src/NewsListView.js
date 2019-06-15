(function(exports) {
  function NewsListView(newsList) {
    this._newsList = newsList
  };

  NewsListView.prototype.view = function() {
    var openTag = "<div class=\"container\"><h3>"
    var closeTag = "</h3></div>"
    this._newsList._stories.forEach(function(i){
      return openTag + i._headline + closeTag
    });
  };

  exports.NewsListView = NewsListView;
})(this);
