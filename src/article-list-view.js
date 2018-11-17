(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.html = function() {
    var view = "<ul>";
    this.articleList.articles.forEach((article) => {
      view += "<li><a ahref='" + article.webURL + "'>" + article.headline + "</a></li>";
    });
    view += "</ul>";
    return view;
  };

  exports.ArticleListView = ArticleListView;
})(this);
