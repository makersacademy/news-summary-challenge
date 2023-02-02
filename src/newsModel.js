class NewsModel {
  constructor() {
    this.allNews = [];
  }

  getAllNews() {
    return this.allNews;
  }

  setNews(news) {
    this.allNews = news;
  }
}

module.exports = NewsModel;
