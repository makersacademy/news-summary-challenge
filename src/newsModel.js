class NewsModel {
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
    this.articles = articles;
  }
}

module.exports = NewsModel;