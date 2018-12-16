(function(exports) {

  function NewsArticleView(newsArticleModel) {
    this.newsArticleModel = newsArticleModel;
  }

  NewsArticleView.prototype = {
    render: function() {
      return [
        "<div>",
          "<h1>",
            this.newsArticleModel.headline(),
          "</h1>",
          "<p>",
            this.newsArticleModel.summary(),
          "</p>",
        "</div>"
      ].join("")
    }
  }

  exports.NewsArticleView = NewsArticleView;
})(this);
