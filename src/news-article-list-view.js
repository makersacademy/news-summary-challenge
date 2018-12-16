(function(exports) {

  function NewsArticleListView(newsArticleListModel) {
    this.newsArticleListModel = newsArticleListModel;
  }

  NewsArticleListView.prototype = {
    render: function() {
      return [
        "<div>",
          "<ul>",
            this.newsArticleListModel.list.map(function(article) { return "<li>" + article.headline() + "</li>" }),
          "</ul>",
        "</div>"
      ].join(" ")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);
