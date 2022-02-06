class NewsView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

  }

  addTitle(title) {
    let titleEl = document.createElement("h2");
    titleEl.className = "article-title";
    titleEl.innerText = title;
    this.mainContainerEl.append(titleEl);
  }
}

module.exports = NewsView;