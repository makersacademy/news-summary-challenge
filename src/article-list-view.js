(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.html = function() {
    var view = "<ul>";
    // for (var i = 0; i < this.articleList.articles.length; i++) {
    //   view += "<li>" + this.articleList.articles.article.headline + "</li>";
    // }
    this.articleList.articles.forEach((article) => {
      view += "<li>" + article.headline + "</li>";
    });
    view += "</ul>";
    return view;
  };

  exports.ArticleListView = ArticleListView;
})(this);
