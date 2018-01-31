(function(exports) {
  function HeadlineListView(headlineList) {
    this.headlineList = headlineList;
  };

  HeadlineListView.prototype.createHtmlString = function() {
    var list = this.headlineList
    .getHeadlines()
    .map(headline => {
      return "<li><a href='#" + headline.id + "'>" +
      headline.getTitle() + "<img src=" + headline.getThumbnail() + "></a></li>"})
    .join("");

    return "<ul>" + list + "</ul>";
  };

  exports.HeadlineListView = HeadlineListView;
})(this);
