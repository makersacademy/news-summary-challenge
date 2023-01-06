class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }
  displayNewsItems(model) {
    const notes = this.model.getNews();

    notes.forEach((item) => {
      const newNewsItem = document.createElement("div");
      newNewsItem.className = "news-item";
      newNewsItem.textContent = item;
      this.mainContainerEl.append(newNewsItem);
    });
  }
}

module.exports = NewsView;
