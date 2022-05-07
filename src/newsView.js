const NewsApi = require("./newsApi");

class NewsView {
  constructor(api = new NewsApi()) {
    this.api = api;
  }
}

module.exports = NewsView;
