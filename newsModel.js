class NewsModel {
  
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  addArticle(article) {
    this.news.push(article);
  }

  setArticles(articles) {
    articles.forEach((article) => this.addArticle(article));
  }
}

module.exports = NewsModel;