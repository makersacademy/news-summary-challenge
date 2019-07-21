(function(exports) {
  function NewsController(newsArticleList) {
    this.list = newsArticleList;

    this.renderHeadlines = function(app = document.getElementById('app')) {
      let target = app;
      let headlines = newsArticleList.convertToHTML();
      target.innerHTML = headlines;
    };
  }

  exports.NewsController = NewsController;
})(this);
