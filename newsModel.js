class NewsModel {
  constructor() {
    this.articles = [];
  }

  getArticles() {
    return this.articles
  }

  setArticles(articles) {
    this.articles = articles
  }

  reset() {
    this.articles = []
  }
}

