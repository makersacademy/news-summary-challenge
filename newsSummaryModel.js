class NewsSummaryModel {
  constructor() {
    this.headlines = [];
  }

  getNews() {
    return this.headlines;
  }

  addNews(headline) {
    this.headlines = headline;
  }
}

module.exports = NewsSummaryModel;
