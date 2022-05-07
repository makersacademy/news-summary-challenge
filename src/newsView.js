const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel(), api = new NewsApi()) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayArticles() {
    this.model.getArticles().forEach((article) => {
      const articleEl = document.createElement("div");
      articleEl.classList.add("article");
      articleEl.innerText = article;
      this.mainContainerEl.append(articleEl);
    });
  }
}

module.exports = NewsView;
