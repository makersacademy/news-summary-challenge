(function(exports) {

  function NewsArticleListView(newsArticleListModel) {
    this.newsArticleListModel = newsArticleListModel;
  }

  NewsArticleListView.prototype = {
    render: function(articles) {
      return [
        "<div>",
          "<ul>",
            articles.map(function(article) { return "<a ref='#'>" + article.headline() + "<br>" + "</a>" }).join(""),
          "</ul>",
        "</div>"
      ].join("")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);
