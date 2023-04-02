class NewsModel {
  constructor() {
    this.news = []
  }

  addNews(news) {
    this.news = news;
  }

  allNews() {
    return this.news.response.results;
  }
}

module.exports = NewsModel;