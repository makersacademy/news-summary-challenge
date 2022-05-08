const newsApi = require("./newsApi");
const newsModel = require("./newsModel");

class newsView {
  constructor(model = new newsModel(), api = new newsApi()) {
    this.model = model;
    this.api = api;
    this.mainContainerEL = document.querySelector("#container");
    this.newsSearchEL = document.querySelector("#news-search");
    this.newsSearchSubmitEL = document.querySelector("#news-search-submit");

    this.newsSearchSubmitEL.addEventListener("click", () => {
      this.api.loadNews(this.newsSearchEL.value, (data) => {
        this.model.setNews(data);
        console.log(this.model.getNews());
        this.clearDuplicateNews;
        this.displayNews();
      });
    });
  }

  displayNews() {
    this.clearDuplicateNews();
    this.clearDuplicateImages();
    const currentNews = this.model.getNews();

    currentNews.forEach((article) => {
      //headline iteration
      const br = document.createElement("br");
      const newEL = document.createElement("a");
      newEL.className = "headline";
      var linkText = document.createTextNode(article.webTitle);
      newEL.appendChild(linkText);
      newEL.href = article.webUrl;
      document.body.appendChild(newEL);
      newEL.append(br);
      // image iteration
      const imageEL = document.createElement("img");
      imageEL.className = "image";
      imageEL.src = article.fields.thumbnail;

      newEL.append(br);
      newEL.append(imageEL);
      newEL.append(br);
      document.querySelector("#main-container").append(newEL);
    });
  }

  clearDuplicateNews() {
    document
      .querySelectorAll("a.headline")
      .forEach((element) => element.remove());
  }
  clearDuplicateImages() {
    document
      .querySelectorAll("img.image")
      .forEach((element) => element.remove());
  }

  displayNewsFromApi() {
    this.api.loadNews("", (data) => {
      this.model.setNews(data);
      this.displayNews();
    });
    this.displayError();
  }

  displayError() {
    const oldErrors = document.querySelectorAll("div.error");
    oldErrors.forEach((error) => {
      error.remove();
    });
    let errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.innerText = "Oops, something went wrong";
    this.mainContainerEl.append(errorElement);
  }
}

module.exports = newsView;
