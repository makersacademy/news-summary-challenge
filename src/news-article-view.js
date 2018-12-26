(function(exports) {

  function NewsArticleView(newsArticleModel) {
    this.newsArticleModel = newsArticleModel;
  }

  NewsArticleView.prototype = {
    render: function() {
      return [
        "<div class='container'>",
        HomeButton(),
        "<img class='card-img-top' src=" + this.newsArticleModel.thumbnail() + ">",
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
