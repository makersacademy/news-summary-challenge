class newsModel {
  constructor(articles = []) {
    this.articles = articles
  }

  setArticles(articlesArr) {
    this.articles = articlesArr
  }

  getArticles() {
    return this.articles
  }
}

module.exports = newsModel;