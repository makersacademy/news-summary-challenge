class NewsModel {
  getArticles() {
    return this.articles;
  }

  setArticles(articles) {
    this.articles = articles.response.results;
  }
}

module.exports = NewsModel;
