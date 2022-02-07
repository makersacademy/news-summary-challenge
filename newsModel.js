class NewsModel {
  constructor() {
    this.articles = [];
  }

  addArticles(articles) {
    this.articles = articles;
  }

  showArticles() {
    return this.articles;
  }
}

module.exports = NewsModel;
