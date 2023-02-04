class NewsModel {
  constructor() {
    this.articles = []
  }

  getArticles() {
    console.log(this.articles)
    return this.articles;
  }

  setArticles(articles) {
    this.articles = articles.response.results;
  }
}

module.exports = NewsModel;