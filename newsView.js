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
      const newNewsImage = document.createElement("img");
      newNewsImage.className = "news-thumbnail";
      newNewsImage.src = item.fields.thumbnail;
      this.mainContainerEl.append(newNewsImage);

      const newNewsItem = document.createElement("div");
      newNewsItem.className = "news-item";
      newNewsItem.textContent = item.webTitle;
      this.mainContainerEl.append(newNewsItem);

      const link = item.webUrl;
      const newLink = document.createElement("a");
      newLink.className = "news-link";
      newLink.setAttribute("href", link);
      newLink.innerHTML = item.webTitle;

      // and append it to where you'd like it to go:
      this.mainContainerEl.appendChild(newLink);
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
