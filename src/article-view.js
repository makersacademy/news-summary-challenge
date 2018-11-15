function ArticleView(article) {
  this.article = article;
}

ArticleView.prototype.render = function() {
  var interval = setInterval(function() {
    if (this.article.content === "not yet loaded") return;
    clearInterval(interval);
  }, 10);

  return `<p>${this.article.content}</p>`;
};
