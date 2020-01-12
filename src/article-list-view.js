(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.displayHTML = function() {
    return "<ul><li><div>" + this.articleList.showArticles().map(article => article["title"]) + "</div></li></ul>"
  }

  exports.ArticleListView = ArticleListView;
})(this);
