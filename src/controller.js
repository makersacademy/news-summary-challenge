(function(exports) {

  function Controller(newsArticleList, newsArticleListView, NewsArticleView) {
    this.newsArticleList = newsArticleList;
    this.newsArticleListView = newsArticleListView;
    this.NewsArticleView = NewsArticleView;
  }

  Controller.prototype = {
    render: function(id, html) {
      document.getElementById(id).innerHTML = html;
    }
  }

  exports.Controller = Controller;
})(this);
