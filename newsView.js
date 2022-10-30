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

        var image = document.createElement('img');
        image.src = individualNews.fields.thumbnail;

        var title = document.createElement('h1');

        var link = document.createElement('a');
        link.href = individualNews.webUrl;
        link.textContent = individualNews.webTitle;

        title.appendChild(link);
        newsEl.appendChild(image);
        newsEl.appendChild(title);
        this.container.appendChild(newsEl);
      });
    });
  }
}

module.exports = NewsView;
