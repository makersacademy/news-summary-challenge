class ArticlesModel {
  constructor() {
    this.articles = [];
  }

  setArticles(data) {
    this.articles = data;
    return this.articles;
  }
}

module.exports = ArticlesModel;
