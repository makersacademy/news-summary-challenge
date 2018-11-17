(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.getHTML = function() {
    var view = ''
    this.articleList.getArticles().forEach(function(article) {
      view += "<li><div><a href='http://localhost:8080#articles/" + article.id + "'>" + article.headline + "</a></div></li>"
    })
    return view;
  }

  exports.ArticleListView = ArticleListView
})(this);
