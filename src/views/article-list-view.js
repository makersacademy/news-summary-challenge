(function (exports) {

  function ArticleListView(articleList = new ArticleList()) {
    this._articleList = articleList
  }

  exports.ArticleListView = ArticleListView;
})(this);
