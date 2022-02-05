class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  setArticles(articles) {
    this.articles = articles;
  }

  getArticles() {
    return this.articles;
  }
}

module.exports = ArticlesModel;
