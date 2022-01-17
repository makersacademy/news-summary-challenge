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
    let id = 0;
    for (const article of articles) {
      let newArticle = document.createElement("div");
      newArticle.className = "article";
      newArticle.setAttribute("id", id);
      this.createHeadline(article, newArticle, id);
      this.createImage(article, newArticle, id);
      newArticle.addEventListener("click", this.addSummary);
      id++;
      this.mainContainerEl.appendChild(newArticle);
    }
  }

  addSummary = (thingClicked) => {
    this.clearSummaries();
    let id = thingClicked.target.id;
    let summary = document.createElement("div");
    summary.className = "summary";
    let article = this.model.articles[id];
    let text = this.model.getSummary(article);
    for (const element of text) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = element;
      summary.appendChild(paragraph);
    }
    this.createReadMoreLink(article, summary);
    let parentElement = document.querySelectorAll(".article")[id];
    parentElement.appendChild(summary);
  }

  createReadMoreLink(article, parentElement) {
    let readmore = document.createElement("a");
    readmore.innerText = "(Read more)";
    readmore.setAttribute("href", article.webUrl);
    readmore.className = "readmore";
    parentElement.appendChild(readmore);
  }

  createHeadline(article, parentElement, id) {
    let headline = document.createElement("h2");
    headline.innerText = article.webTitle;
    headline.setAttribute("id", id);
    parentElement.appendChild(headline);
  }

  createImage(article, parentElement, id) {
    let image = document.createElement("img");
    image.setAttribute("src", article.fields.thumbnail);
    image.setAttribute("id", id);
    parentElement.appendChild(image);
  }

  clearSummaries() {
    let summaries = document.querySelectorAll(".summary");
    for (const summary of summaries) {
      summary.remove();
    }
  }

}

module.exports = NewsAppView;