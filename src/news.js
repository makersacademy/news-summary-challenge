class News {
  constructor() {
    this.articles = []
  }

  getArticles() {
    return this.articles
  }

  add(article) {
    this.articles.push(article)
  }
};
