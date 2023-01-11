class NewsModel {
  constructor() {
    this.articles = null;
    this.queryArticles = null;
  }

  getArticles() {
    return this.articles;
  }

  setArticles(articles) {
    this.articles = articles;
  }

}

module.exports = NewsModel;