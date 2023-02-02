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
      const { thumbnail, headline, webUrl, standfirst } = article;
      const newsItem = document.createElement('div');
      const html = `<a class="image_link" href="${webUrl}" ><img class="news_thumbnail" src=${thumbnail}></a>
                    <a class="headline_link" href="${webUrl}" ><p class="news_headline">${headline}</p></a>
                    <div class="standfirst">${standfirst}</div>`;
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

  displayNewsBySection(section) {
    this.newsClient.filterNews(section, (data) => {
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
      this.addSearchbarListeners();
      this.addHeaderListeners();
    });
  }

  addSearchbarListeners() {
    document.getElementById('searchbar').addEventListener('submit', (event) => {
      event.preventDefault();
      const search = document.querySelector('#search-input').value;
      this.displayNewsFromSearch(search);
    });
  }

  addHeaderListeners() {
    document
      .getElementById('header-button-logo')
      .addEventListener('click', () => {
        this.displayNewsFromApi();
      });
    document
      .getElementById('header-button-business')
      .addEventListener('click', () => {
        this.displayNewsBySection('business');
      });
    document
      .getElementById('header-button-opinion')
      .addEventListener('click', () => {
        this.displayNewsBySection('commentisfree');
      });
    document
      .getElementById('header-button-sport')
      .addEventListener('click', () => {
        this.displayNewsBySection('sport');
      });
    document
      .getElementById('header-button-culture')
      .addEventListener('click', () => {
        this.displayNewsBySection('culture');
      });
  }

  #clearStories() {
    const stories = document.querySelectorAll('.news');
    stories.forEach((story) => story.remove());
  }
}

module.exports = NewsView;
