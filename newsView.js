class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    this.api.loadArticles((data) => {
      this.model.addArticles(data.response.results);
      this.createArticles()
    })

  }
  createArticles() {
    this.model.showArticles().forEach(article => {
      let articleEl = document.createElement("article");
      articleEl.className = "article-container";
      this.mainContainerEl.append(articleEl);
      
      this.#addTitle(article.webTitle)
      this.#addImage(article.fields.thumbnail)
    });

  }

  #addTitle(title) {
    let titleEl = document.createElement("h2");
    titleEl.innerText = title;
    titleEl.className = "article-title";
    this.mainContainerEl.lastElementChild.append(titleEl);
  }

  #addImage(imgSrc) {
    let imgEl = document.createElement("img");
    imgEl.src = imgSrc;
    imgEl.className = "article-image";
    this.mainContainerEl.lastElementChild.append(imgEl);

  }
}

module.exports = NewsView;
