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
}

module.exports = NewsModel;
