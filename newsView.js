class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");

    this.api.loadArticles((data) => {
      this.model.addArticles(data.response.results);
      this.createArticles();
    });

    //************ Event Listener for Searching Articles ****************/
    const submitButtonEl = document.querySelector('#submit-button');
    const searchInputEl = document.querySelector('#search-input');

    submitButtonEl.addEventListener('click', () => {
      const searchName = searchInputEl.value;
      document.querySelectorAll(".article-container").forEach(article => article.remove());

      this.api.searchArticles(searchName, (data) => {
        this.model.addArticles(data.response.results);
        this.createArticles();
      });
    });
  }

  //************ Article Creating ****************/
  createArticles() {
    this.model.showArticles().forEach((article) => {

      this.#addArticleEl();
      this.#addImage(article.fields.thumbnail);
      this.#addTitle(article.webTitle, article.webUrl);
    });
  }

  //****** Private functions to help creating articles *********/
  #addArticleEl() {
    let articleEl = document.createElement("article");
    articleEl.className = "article-container";
    this.mainContainerEl.append(articleEl);
  }

  #addTitle(title, source) {
    let titleEl = document.createElement("h2");
    titleEl.innerText = title;
    titleEl.className = "article-title";

    let linkEl = document.createElement("a");
    linkEl.href = source;
    linkEl.append(titleEl)
    this.mainContainerEl.lastElementChild.append(linkEl);
  }

  #addImage(imgSrc) {
    let imgEl = document.createElement("img");
    imgEl.src = imgSrc;
    imgEl.className = "article-image";
    this.mainContainerEl.lastElementChild.append(imgEl);
  }
}

module.exports = NewsView;
