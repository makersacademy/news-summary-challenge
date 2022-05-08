class NewsModel {
  constructor() {
    this.news = [];

  }

  getNews() {
    return this.news;
  }

  addNews(model) {
    this.news.push(model);
  }
  
  resetNews() {
    this.news = [];
  }
}

module.exports = NewsModel