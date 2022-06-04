class NewsModel {
  constructor() {
    this.headlines = [];
  }

  getNews() {
    return this.headlines;
  }

  addNews(headline) {
    this.headlines.push(headline);
  }

  reset() {
    this.headlines = [];
  }
}

module.exports = NewsModel;
