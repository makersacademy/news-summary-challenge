class NewsModel {
  constructor() {
    this.articles = null;
    this.queryArticles = null;
  }

  getArticles() {
    return this.articles;
  }

  getSearchArticles() {
    return this.queryArticles;
  }

  setArticles(articles) {
    this.articles = articles;
  }

  setQueryArticles(articles) {
    this.queryArticles = articles;
  }
}

module.exports = NewsModel;