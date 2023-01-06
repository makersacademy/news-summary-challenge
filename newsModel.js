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
}

module.exports = NewsModel;
