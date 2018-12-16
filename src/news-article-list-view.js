(function(exports) {

  function NewsArticleListView(newsArticleListModel) {
    this.newsArticleListModel = newsArticleListModel;
  }

  NewsArticleListView.prototype = {
    render: function() {
      return [
        "<div>",
          "<ul>",
            this.newsArticleListModel.list.map(function(article) { return "<a ref='#'>" + article.headline() + "</a>" }),
          "</ul>",
        "</div>"
      ].join(" ")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);
