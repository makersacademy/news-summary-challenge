const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

class NewsView {
  constructor(model = new NewsModel(), api = new NewsApi()) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayArticles() {
    const articles = this.model.getArticles();

    articles.forEach((article) => {
      const articleEl = document.createElement("div");
      articleEl.classList.add("article");

      const articleHeadlineEl = document.createElement("a");
      articleHeadlineEl.classList.add("headline");
      articleHeadlineEl.innerText = article.fields.headline;
      articleHeadlineEl.href = article.webUrl;

      const articleImage = document.createElement("img");
      articleImage.classList.add("thumbnail");
      articleImage.src = article.fields.thumbnail;

      articleEl.append(articleImage);
      articleEl.append(articleHeadlineEl);
      this.mainContainerEl.append(articleEl);
    });
  }

  displayArticlesFromApi() {
    this.api.loadArticles((receivedArticles) => {
      this.model.setArticles(receivedArticles);
      this.displayArticles();
      // console.log(receivedArticles);
    });
  }
}

module.exports = NewsView;
