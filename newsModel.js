class NewsModel {
  constructor() {
    this.newsInfo = [];
  }
  getNewsInfo() {
    return this.newsInfo
  }
  addNewsInfo(data) {
    this.newsInfo.push(data)
  }
}

module.exports = NewsModel;