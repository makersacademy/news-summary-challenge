class NewsModel {
  constructor() {
    this.headlines = [];
  }

  getHeadlines() {
    return this.headlines;
  }

  addHeadlines(headlines) {
    this.headlines = headlines;
  }
  
}

module.exports = NewsModel;