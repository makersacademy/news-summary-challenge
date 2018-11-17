function ArticleView(article) {
  this.article = article;
}

ArticleView.prototype.render = function() {
  return `<p class="article-content">${this.article.content}</p>`;
};
