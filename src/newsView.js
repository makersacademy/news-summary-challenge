const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel(), api = new NewsApi()) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayArticles() {
    const articles = this.model.getArticles().response.results;

    articles.forEach((article) => {
      const articleEl = document.createElement("div");
      articleEl.classList.add("article");
      articleEl.innerText = article.fields.headline;
      this.mainContainerEl.append(articleEl);
    });
  }

  displayArticlesFromApi() {
    this.api.loadArticles((receivedArticles) => {
      this.model.setArticles(receivedArticles);
      this.displayArticles();
      console.log(receivedArticles);
    });
  }
}

module.exports = NewsView;
