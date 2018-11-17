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
  return `<li><div class='article-head'><div class='article-image'><img src='${article.imageURL}'></div><div class='article-headline'><a href='#articles/${article.id}'>${article.headline}</a></div></div><div class='article-content-container' id='content-${article.id}'></div></li>`;
};
