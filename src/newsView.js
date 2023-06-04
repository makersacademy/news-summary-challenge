class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }

  loadTodaysNews() {
    this.client.fetchTodaysNews(news => {
      this.model.setNews(news);
      this.displayTodaysNews();
    }, this.displayLoadError);
  }

  displayTodaysNews() {
    const news = this.model.getNews();
    const newsContainer = document.querySelector("#news-container");

    news.forEach(item => {
      const newItem = this.createNewsItem(item);
      newsContainer.append(newItem);
    });
  }

  displayLoadError() {
    console.log("handle error");
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
    newItem.append(newLink);
    newItem.append(newThumbnail);

    return newItem;
  }
}

module.exports = NewsView;
