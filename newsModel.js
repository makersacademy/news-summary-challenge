class NewsModel {
  constructor() {
    this.news = [];
  }

  displayNews() {
    return this.news;
  }

  addNews(news) {
    this.news.push(news);
  }

  setNews(news) {
    this.news = news;
  }
}

module.exports = NewsModel

