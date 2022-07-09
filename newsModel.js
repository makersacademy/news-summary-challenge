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
}

module.exports = NewsModel;