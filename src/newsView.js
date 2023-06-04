class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.inputEl = document.querySelector("#search-input");
    this.buttonEl = document.querySelector("#search-button");

    this.buttonEl.addEventListener("click", () => {
      let query = this.inputEl.value;
      this.loadNewsFromSearch(query);
      this.inputEl.value = "";
    });
  }

  loadTodaysNews() {
    this.client.fetchTodaysNews(news => {
      const heading = document.querySelector("#news-heading");
      heading.textContent = "Today's News Summary";
      const backButton = document.querySelector("#back-button");
      if (backButton) {
        backButton.remove();
      }
      this.model.setNews(news);
      this.displayNews();
    }, this.displayLoadError);
  }

  loadNewsFromSearch(query) {
    this.client.fetchNewsBySearchQuery(
      query,
      news => {
        const heading = document.querySelector("#news-heading");
        heading.textContent = `News about: ${query}`;
        this.createBackButton();
        this.model.setNews(news);
        this.displayNews();
      },
      this.displayLoadError
    );
  }

  displayNews() {
    this.resetView();
    const news = this.model.getNews();
    const newsContainer = document.querySelector("#news-container");

    news.forEach(item => {
      const newItem = this.createNewsItem(item);
      newsContainer.append(newItem);
    });
  }

  displayLoadError() {
    const error = document.createElement("p");
    error.textContent = "There was an error loading the news";
    document.querySelector("#news-container").append(error);
  }

  createNewsItem(item) {
    const newItem = document.createElement("div");
    const newLink = document.createElement("a");
    const newHeading = document.createElement("h2");
    const newThumbnail = document.createElement("img");
    newItem.className = "headline";
    newHeading.textContent = item.headline;
    newLink.href = item.url;
    newLink.target = "_blank";
    newThumbnail.src = item.thumbnail;
    newThumbnail.alt = "thumbnail image for article";
    newLink.append(newHeading);
    newItem.append(newThumbnail);
    newItem.append(newLink);

    return newItem;
  }

  createBackButton() {
    const button = document.createElement("button");
    button.textContent = "Back to today's headlines";
    button.id = "back-button";
    const searchContainer = document.querySelector("#search-container");
    searchContainer.append(button);

    button.addEventListener("click", () => {
      this.loadTodaysNews();
    });
  }

  resetView() {
    const existingNews = document.querySelectorAll(".headline");
    existingNews.forEach(item => {
      item.remove();
    });
  }
}

module.exports = NewsView;
