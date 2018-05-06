(function(exports){
  function NewsListView(list){
    this.newsList = list
  };
  NewsListView.prototype.display = function() {
    return "<ul><li><div>"+(this.newsList.items.join("</div></li><li><div>"))+"</div></li></ul>";
  };
  exports.NewsListView = NewsListView;
})(this);
