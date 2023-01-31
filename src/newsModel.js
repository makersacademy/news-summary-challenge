class NewsModel {
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  setNews(response) {
    this.news = response;
  }
}

module.exports = NewsModel;
