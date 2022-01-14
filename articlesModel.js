class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  reset() {
    this.articles = [];
  }
}

module.exports = ArticlesModel;
