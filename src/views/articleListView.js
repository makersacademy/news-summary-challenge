(function (exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.renderView = function () {
    var view = '<ul>'
    this.articleList.articles.forEach(function (article) {
      view += '<li>' + article.getHeadline() + '</li>'
    })
    view += '</ul>'
    return view
  };

  exports.ArticleListView = ArticleListView
})(this)
