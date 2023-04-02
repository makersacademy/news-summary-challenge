class NewsModel {
  constructor() {
    this.news = [];
  }

  set(news) {
    this.news = news;
  }

  get() {
    return this.news;
  }

  reset() {
    return (this.news = []);
  }
}

module.exports = NewsModel;
