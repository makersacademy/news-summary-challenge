(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.displayHTML = function() {
    return "<ul>" + this.articleList.showArticles().map(article => {
      return `<li><a href='#articles/${article.id}'>` + article.readTitle() + "</a></li>"
    }).join("") + "</ul>"
  }

  exports.ArticleListView = ArticleListView;
})(this);
