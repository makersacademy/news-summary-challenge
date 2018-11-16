function ArticleListView(articleList) {
  this.articleList = articleList;
}

ArticleListView.prototype.render = function() {
  var html = "<ul>";
  this.articleList.articles.forEach((article) => {
    html += this._list(article);
  });
  return html + "</ul>";
};

ArticleListView.prototype._list = function(article) {
  return `<li><a href='#articles/${article.id}'>${article.headline}</a></li>`;
};
