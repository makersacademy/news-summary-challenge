class NewsModel {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  setItems(array) {
    this.items = array;
  }

  resetItems() {
    this.items = [];
  }
}

module.exports = NewsModel;