class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;
    this.mainContainer = document.querySelector('#main-container');
    this.addEventListeners();
  }

  displayNews() {
    this.#clearStories();
    const news = this.newsModel.getNews();

    news.forEach((article) => {
      const { thumbnail, headline, webUrl } = article;
      const newsItem = document.createElement('LI');
      const html = `<a class="news_link" href="${webUrl}" ><img class="thumbnail" src=${thumbnail}></a><a href="${webUrl}" ><p class="news_headline">${headline}</p></a>`;
      newsItem.className = 'news';
      newsItem.innerHTML = html;
      this.mainContainer.append(newsItem);
    });
  }

  displayNewsFromApi() {
    this.newsClient.loadNews((data) => {
      const stories = this.mapNewsData(data);
      this.newsModel.setNews(stories);
      this.displayNews();
    });
  }

  displayNewsFromSearch(searchTerm) {
    this.newsClient.searchNews(searchTerm, (data) => {
      const stories = this.mapNewsData(data);
      this.newsModel.setNews(stories);
      this.displayNews();
    });
  }

  mapNewsData(data) {
    const results = data.response.results;
    return results.map(
      ({ webUrl, fields: { headline, thumbnail, standfirst } }) => ({
        webUrl,
        headline,
        thumbnail,
        standfirst,
      })
    );
  }

  addEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.displayNewsFromApi();
      document
        .getElementById('searchbar')
        .addEventListener('submit', (event) => {
          event.preventDefault();
          const search = document.querySelector('#search-input').value;
          this.displayNewsFromSearch(search);
        });
    });
  }

  #clearStories() {
    const stories = document.querySelectorAll('.news');
    stories.forEach((story) => story.remove());
  }
}

module.exports = NewsView;
