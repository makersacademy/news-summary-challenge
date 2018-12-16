(function(exports) {

  function NewsArticleListView(newsArticleListModel) {
    this.newsArticleListModel = [];
  }

  NewsArticleListView.prototype = {
    render: function(article) {
      return [
        "<div>",
          "<ul>",
            this.newsArticleListModel.map(function(article) { return "<li>" + article + "</li>" }),
          "</ul>",
        "</div>"
      ].join(" ")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);
