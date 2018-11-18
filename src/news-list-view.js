(function(exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
  };

  NewsListView.prototype.renderNewsItems = function() {
    var view = '<ul>';
    this.newsList.getNewsItems().forEach(function (news) {
      view += '<li><div><a href="#news/' + news.getId() + '">';
      view += news.displayText();
      view += '</a></div></li>';
    })
    view += '</ul>'
    return view;
  };

  exports.NewsListView = NewsListView;
})(this);
