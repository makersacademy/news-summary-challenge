(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype = {
      createHTML: function () {
      var div = "<div>"
      this.articleList.getArticles().forEach(function(article) {
          div += `<a href="${article.getURL()}"><img src="${article.getThumbnail()}"></a><h4><a href="${article.getURL()}">${article.getTitle()}</a></h4>`;
        });
      return div + "</div>"
    }
  };

  exports.ArticleListView = ArticleListView
})(this);
