(function(exports) {

  function NewsArticleView(newsArticleModel) {
    this.newsArticleModel = newsArticleModel;
  }

  NewsArticleView.prototype = {
    render: function(article) {
      return [
        "<div>",
          "<h1>",
            article.headline(),
          "</h1>",
          "<p>",
            article.summary(),
          "</p>",
        "</div>"
      ].join("")
    }
  }

  exports.NewsArticleView = NewsArticleView;
})(this);
