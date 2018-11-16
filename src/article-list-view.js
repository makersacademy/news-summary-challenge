(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.html = function() {
    return '<ul></ul>'
  };

  exports.ArticleListView = ArticleListView;
})(this);
