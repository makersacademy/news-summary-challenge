class NewsModel {
  constructor() {
    this.news = []
  }

  addNews(news) {
    this.news.push(news)
  }

  allNews() {
    return this.news;
  }
}

module.exports = NewsModel;