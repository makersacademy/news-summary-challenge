class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.buttonEl = document.querySelector("#filter-button");

    this.buttonEl.addEventListener("click", () => {
      let filter = document.querySelector("#filter-input").value;
      this.filterNewsFromApi(filter);
      filter = "";
    });
  }
  displayNewsItems() {
    document.querySelectorAll(".news-item").forEach((item) => {
      item.remove();
    });

    const notes = this.model.getNews();

    notes.forEach((item, index) => {
      const newline = document.createElement("br");
      const newNewsImage = document.createElement("img");

      newNewsImage.className = "news-thumbnail";
      newNewsImage.src = item.fields.thumbnail;

      const newNewsItem = document.createElement("div");
      newNewsItem.className = "news-item";
      newNewsItem.id = `index-${index}`;
      this.mainContainerEl.append(newNewsItem);

      const divContainerEl = document.querySelector(`#index-${index}`);

      divContainerEl.append(newNewsImage);
      divContainerEl.append(newline);

      const link = item.webUrl;
      const newLink = document.createElement("a");
      newLink.className = "news-link";
      newLink.setAttribute("href", link);
      newLink.innerHTML = item.webTitle;

      divContainerEl.appendChild(newLink);
      divContainerEl.append(newline);
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

  filterNewsFromApi(filter) {
    this.client.filterHeadlines(
      filter,
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
