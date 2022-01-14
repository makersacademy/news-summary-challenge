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

  setArticles(articles) {
    articles.response.results.forEach((article) => this.addArticle(article));
  }

  reset() {
    this.articles = [];
  }
}

module.exports = ArticlesModel;
