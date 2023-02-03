class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayArticles() {
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
        this.model.setArticles(articles);
        this.displayArticles();
      })
  }
}

module.exports = NewsView;