"strict mode";

class ArticleView {
  constructor(article) {
    this.article = article;
  }

  generateArticleHTML() {
    return "<div>" + this.article.content + "</div>";
  }
}
