(function(exports) {
  function NewsListView(newsList) {
    this._newsList = newsList
  };

  NewsListView.prototype.view = function () {
    var openTag = "<div class=\"container\"><h3>"
    var closeTag = "</h3></div>"
    this._newslist.viewAll().viewHeadline().forEach(function(i) {
      openTag + i.viewAll + closeTag
    })
  };

  exports.NewsListView = NewsListView;
})(this);
