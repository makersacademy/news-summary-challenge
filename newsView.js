class NewsView {
  constructor(client, container) {
    this.client = client;
    this.container = document.getElementById('container');
    this.searchInput = document.getElementById('searchInput');
    this.newsFromDOM = document.querySelectorAll('.news');
    this.buttonEl = document.querySelector('#search-button');

    this.buttonEl.addEventListener('click', () => {
      let searchInput = document.querySelector('#search-input');
      console.log(this.newsFromDOM);

      this.newsFromDOM.forEach((individualNews) => {
        if (
          individualNews.webTitle
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
          this.displayIndividualNews(individualNews);
        } else {
          individualNews.remove();
        }
      });
      document.querySelector('#search-input').value = '';
    });
  }

  displayIndividualNews(individualNews) {
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
