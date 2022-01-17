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
      this.createHeadline(article, newArticle);
      this.createImage(article, newArticle);
      this.mainContainerEl.appendChild(newArticle);
    }
  }

  createHeadline(article, parentElement) {
    let headline = document.createElement("h2");
    headline.innerText = article.webTitle;
    parentElement.appendChild(headline);
  }

  createImage(article, parentElement) {
    let image = document.createElement("img");
    image.setAttribute("src", article.fields.thumbnail);
    parentElement.appendChild(image);
  }

}

module.exports = NewsAppView;