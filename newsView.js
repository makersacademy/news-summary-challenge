class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    this.api.loadArticles((data) => {
      this.model.addTitles(data.response.results);
      this.createArticles()
    })

  }
  createArticles() {
    this.model.showTitles().forEach(title => {
      let article = document.createElement("article");
      article.className = "article-container";
      this.mainContainerEl.append(article);
      this.#addTitle(title)
    });

  }

  #addTitle(title) {
    let titleEl = document.createElement("h2");
    titleEl.innerText = title;
    titleEl.className = "article-title";
    this.mainContainerEl.lastElementChild.append(titleEl);
  }
}

module.exports = NewsView;
