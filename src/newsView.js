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
      const newItem = document.createElement("div");
      newItem.className = "headline";
      const newHeadline = document.createElement("h2");
      newHeadline.textContent = item.headline;
      newItem.append(newHeadline);
      newsContainer.append(newItem);
    });
  }

  displayLoadError() {
    console.log("handle error");
  }
}

module.exports = NewsView;
