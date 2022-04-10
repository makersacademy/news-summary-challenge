class NewsSummaryModel {
  constructor() {
    this.headlines = [];
  }

  getNews() {
    return this.headlines;
  }

  addNews(headline) {
    this.reset();
    this.headlines = headline;
  }

  reset() {
    this.headlines = [];
  }
}

module.exports = NewsSummaryModel;
