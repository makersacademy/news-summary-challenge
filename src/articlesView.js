class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.firstColumnEl = document.querySelector("#first-column");
    this.secondColumnEl = document.querySelector("#second-column");
    this.searchFieldEl = document.querySelector("#search-field");
    this.searchButtonEl = document.querySelector("#search-button");

    this.searchButtonEl.addEventListener("click", () => {
      this.model.reset();
      this.#emptyDisplay();
      this.#emptySummaries();
      this.displayArticlesFromApi(this.searchFieldEl.value);
    });

    this.searchFieldEl.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.searchButtonEl.click();
      }
    });
  }

  displayArticlesFromApi(search) {
    this.api.loadArticles(
      (responseData) => {
        responseData.response.results.forEach((articleData) => {
          const article = this.model.convertData(articleData);
          this.model.addArticle(article);
        });
        this.#displayArticles();
      },
      search,
      () => {
        this.#displayError();
      }
    );
  }

  // private methods

  #displayArticles() {
    const articles = this.model.getArticles();
    if (articles.length === 0) {
      this.#noResults();
    } else {
      articles.forEach((article) => {
        const articleEl = document.createElement("div");
        articleEl.classList.add("article");

        const imgBorderEl = document.createElement("div");
        imgBorderEl.classList.add("border");

        const pictureEl = document.createElement("img");
        pictureEl.classList.add("pic");
        pictureEl.src = article.image;
        imgBorderEl.append(pictureEl);

        this.#addImageClick(pictureEl, article);

        const nameEl = document.createElement("a");
        nameEl.classList.add("title");
        nameEl.href = article.url;
        nameEl.innerText = article.headline;
        nameEl.setAttribute("target", "_blank");

        articleEl.append(imgBorderEl, nameEl);

        this.firstColumnEl.append(articleEl);
      });
    }
  }

  #emptyDisplay() {
    document.querySelectorAll("div.article").forEach((article) => {
      article.remove();
    });
    document.querySelectorAll("div.message").forEach((message) => {
      message.remove();
    });
  }

  #addImageClick(picture, article) {
    picture.addEventListener("click", () => {
      this.#emptySummaries();
      const headlineEl = document.createElement("h2");
      headlineEl.classList.add("headline");
      headlineEl.innerText = article.headline;

      const summaryEl = document.createElement("p");
      summaryEl.classList.add("summary");
      summaryEl.innerText = article.summary;

      this.secondColumnEl.append(headlineEl, summaryEl);
    });
  }

  #emptySummaries() {
    document.querySelectorAll("h2.headline").forEach((headline) => {
      headline.remove();
    });
    document.querySelectorAll("p.summary").forEach((summary) => {
      summary.remove();
    });
  }

  #noResults() {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message");
    messageEl.innerText = "No results matching your search";
    this.firstColumnEl.append(messageEl);
  }

  #displayError() {
    const errorMessageEl = document.createElement("div");
    errorMessageEl.classList.add("message");
    errorMessageEl.innerText = "Oops, Something went wrong!";
    this.firstColumnEl.append(errorMessageEl);
  }
}

module.exports = ArticlesView;
