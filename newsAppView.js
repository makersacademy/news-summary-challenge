class NewsAppView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  loadArticles() {
    this.api.getArticles((articles) => {
      model.setArticles(articles)
    })
  }

  displayArticles() {
    let articles = this.model.articles;
    for (const article of articles) {
      let newArticle = document.createElement("div");
      newArticle.className = "article";
      let headline = document.createElement("h2");
      headline.innerText = article.webTitle;
      newArticle.appendChild(headline);
      let image = document.createElement("img");
      image.setAttribute("src", article.fields.thumbnail);
      newArticle.appendChild(image);
      this.mainContainerEl.appendChild(newArticle);
    }
  }

}

module.exports = NewsAppView;