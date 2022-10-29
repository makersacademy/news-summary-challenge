class NewsView {
  constructor(client, container) {
    this.client = client;
    this.container = container;
  }

  displayNews() {
    this.client.loadNews((news) => {
      news.response.results.forEach((individualNews) => {
        var newsEl = document.createElement('div');
        newsEl.className = 'news';

        var title = document.createElement('h1');
        title.textContent = individualNews.webTitle;

        newsEl.appendChild(title);
        this.container.appendChild(newsEl);
      });
    });
  }
}

module.exports = NewsView;
