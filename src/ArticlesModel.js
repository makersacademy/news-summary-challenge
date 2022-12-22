class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  addArticle(article) {
    article.forEach((a) => {
      this.articles.push(a);
    });
  }

  reset() {
    this.articles = [];
  }
}

module.exports = ArticlesModel;
