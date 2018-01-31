(function(exports) {
  function HeadlineListView(headlineList) {
    this.headlineList = headlineList;
  };

  HeadlineListView.prototype.createHtmlString = function() {
    var list = this.headlineList
    .getArticles()
    .map(article => {
      return "<li><a href='#" + article.id + "'>" +
      article.getHeadline() + "</a></li>"})
    .join("");

    return "<ul>" + list + "</ul>";
  };

  exports.HeadlineListView = HeadlineListView;
})(this);
