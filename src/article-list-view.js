function ArticleListView(articleList) {
  this.articleList = articleList;
}

ArticleListView.prototype = {
    createHTML: function () {
    var div = "<div>"
    this.articleList.getArticles().forEach(function(article) {
        div += `<img src="${article.getThumbnail()}" href="${article.getURL()}"><h4><a href="${article.getURL()}">${article.getTitle()}</a></h4>`;
      });
    return div + "</div>"
  }
};
