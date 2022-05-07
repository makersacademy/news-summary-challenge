class ModelNews{
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  addNews(news) {
    this.news.push(news)
  }

  setNews(news) {
    this.news = news;
  }

  resetModel() {
    this.news = [];
  }
}

module.exports = ModelNews;