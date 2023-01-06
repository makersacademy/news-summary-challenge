class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }
  displayNewsItems() {
    document.querySelectorAll(".news-item").forEach((item) => {
      item.remove();
    });

    const notes = this.model.getNews();

    notes.forEach((item) => {
      const newNewsItem = document.createElement("div");
      newNewsItem.className = "news-item";
      newNewsItem.textContent = item.webTitle;
      this.mainContainerEl.append(newNewsItem);
    });
  }

  displayNewsFromApi() {
    this.client.loadHeadlines((callback) => {
      this.model.setNews(callback);
      this.displayNewsItems();
    });
  }
}

module.exports = NewsView;
