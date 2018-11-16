(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.html = function() {
    var view = "<ul>";
    console.log(this.articleList.articles)
    this.articleList.articles.forEach((article) => {
      view += "<li>" + article.headline + "</li>";
    });
    view += "</ul>";
    return view;
  };

  exports.ArticleListView = ArticleListView;
})(this);
