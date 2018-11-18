(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.html = function() {
    var view = "<ul>";
    this.articleList.articles.forEach((article) => {
      view += "<li><a href='" + article.webURL + "'>" + article.headline + "</a></li><a href='#article/" + article.id + "'>Click here for summary</a>";
    });
    view += "</ul>";
    return view;
  };

  exports.ArticleListView = ArticleListView;
})(this);
