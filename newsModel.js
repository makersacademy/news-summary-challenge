class NewsModel {
  constructor() {
    this.list = [];
  }
  getNews() {
    return this.list;
  }

  addNewsItem(item) {
    this.list.push(item);
  }

  reset() {
    this.list = [];
  }

  setNews(news) {
    this.reset();
    news.forEach((item) => {
      this.addNewsItem(item);
    });
  }
}

module.exports = NewsModel;
