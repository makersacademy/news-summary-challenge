
(function(exports) {
  function SingleNewsArticleView(news) {
    this.news = news;
  }

  SingleNewsArticleView.prototype.getArticle = function() {
    return this.news;
  }
  SingleNewsArticleView.prototype.renderArticle = function() {
    return document
      .getElementById("news")
      .innerHTML = '<div>' + this.news.displayText() + '</div>';
  }
  exports.SingleNewsArticleView = SingleNewsArticleView;
})(this)
