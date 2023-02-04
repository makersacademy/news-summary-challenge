class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");
    this.searchButton = document.querySelector("#news-search-button");

    this.searchButton.addEventListener("click", () => {
      const searchTerm = document.querySelector("#news-search-input").value;
      document.querySelector("#news-search-input").value = "";
      this.displayTopicArticles(searchTerm);
    })
  }

  displayArticles() {
    const existingArticles = document.querySelectorAll(".article");
    existingArticles.forEach(story => story.remove());

    const articles = this.model.getArticles();
    articles.forEach((article) => {
      const divEl = document.createElement("div");
      divEl.className = "article";
      divEl.textContent = article.fields.headline;
      const imageEl = document.createElement("img")
      imageEl.src = article.fields.thumbnail;
      divEl.append(imageEl);
      const linkEl = document.createElement("a");
      linkEl.innerHTML = "Read more";
      linkEl.href = article.webUrl;
      divEl.append(linkEl);
      this.mainContainerEl.append(divEl);
    })
  }

  displayArticlesFromApi() {
    return this.client.loadArticles()
      .then((articles) => {
        this.model.reset();
        this.model.setArticles(articles);
        this.displayArticles();
      })
  }

  displayTopicArticles(topic) {
    return this.client.loadTopicArticles(topic)
      .then((articles) => {
        this.model.reset();
        this.model.setArticles(articles);
        this.displayArticles();
      })
  }
}

module.exports = NewsView;