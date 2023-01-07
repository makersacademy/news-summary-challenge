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
    this.client.loadHeadlines(
      (callback) => {
        const headlines = callback.response.results;
        this.model.setNews(headlines);
        this.displayNewsItems();
      },
      () => {
        // This will be executed if there's an error
        view.displayError();
      }
    );
  }

  displayError() {
    const errorMessage = document.createElement("div");
    errorMessage.id = "error";
    errorMessage.textContent = "Oops, something went wrong!";
    this.mainContainerEl.append(errorMessage);
  }
}

module.exports = NewsView;
