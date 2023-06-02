const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }
}

module.exports = NewsView;