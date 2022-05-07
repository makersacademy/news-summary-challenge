class NewsModel {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  resetItems() {
    this.items = [];
  }
}

module.exports = NewsModel;