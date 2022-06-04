class NewsModel {
  constructor() {
    this.headlines = [];
  }

  addNews(headlines) {
    this.headlines = headlines;
  }

  getNews() {
    return this.headlines;
  }

  reset() {
    this.headlines = [];
  }
}

module.exports = NewsModel;
