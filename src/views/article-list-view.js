(function (exports) {

  function ArticleListView(articleList = new ArticleList()) {
    this._articleList = articleList
  }

  ArticleListView.prototype.putInElements = function() {
    var listEls = this._articleList._allArticles.map(function(item) {
      return `<li><div><a href="#${item._url}">${item._title}</a></div></li>`
    });
    return '<ul>' + listEls.join('') + '</ul>'
  }

  exports.ArticleListView = ArticleListView;
})(this);
