class ArticleView {
  constructor(article) {
    this.first = article;
    this.articles = [];
  }
}

ArticleView.prototype.list = function () {
  this.articles.push(this.first);
  return this.articles;
};

ArticleView.prototype.htmlHeader = function () {
  let htmlString = '<div class="header">';
  for (let i = 0; i < this.articles.length; i += 1) {
    htmlString += `<h2>${this.articles[i].header}</h2>`;
  }
  return `${htmlString}</div>`;
};

ArticleView.prototype.addArticle = function (article) {
  this.articles.push(article);
};

export default ArticleView;
