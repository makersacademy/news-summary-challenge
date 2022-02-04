class NewsModel {
  constructor() {
    this.headlines = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  addHeadlines(headline) {
    this.headlines.push(headline);
  }

  reset() {
    this.headlines = []
  }
}

module.exports = NewsModel;