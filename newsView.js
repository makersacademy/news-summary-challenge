class NewsView {
  constructor(client, container) {
    this.client = client;
    this.container = document.getElementById('container');
    // this.newsFromDOM = document.querySelectorAll('.news');
    this.buttonEl = document.querySelector('#search-button');
    // this.searchInput = searchInput;

    this.buttonEl.addEventListener('click', () => {
      let searchInput = document.querySelector('#search-input').value;
      let allNews = document.querySelectorAll('.news');
      console.log('allNews', allNews);

      document.querySelectorAll('.news').forEach((news) => {
        news.remove();
      });
      this.displayIndividualNews(searchInput);
      searchInput = '';
    });
  }

  displayIndividualNews(searchInput) {
    this.client.loadNews((news) => {
      news.response.results.forEach((individualNews) => {
        console.log('webtitle', individualNews.webTitle.toLowerCase());
        console.log('searchinput', searchInput.toLowerCase());
        if (
          individualNews.webTitle
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
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
      });
    });
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
