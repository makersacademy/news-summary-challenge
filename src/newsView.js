class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;
    this.mainContainer = document.querySelector('#main-container');
    this.overlay = document.querySelector('#overlay');
    this.addEventListeners();
  }

  displayNews() {
    this.#clearStories();
    const news = this.newsModel.getNews();

    news.forEach((article, index) => {
      const { thumbnail, headline, webUrl, standfirst, bodyText } = article;
      const html = `<a class="image_link" id="img-link-${index}" href="#summary"><img class="news_thumbnail" src=${thumbnail} /></a>
      <div class="content_background">
      <a class="headline_link" href="${webUrl}" ><p class="news_headline">${headline}</p></a>
      <div class="standfirst">${standfirst}</div></div>`;
      const newsItem = document.createElement('div');
      newsItem.className = 'news';
      newsItem.innerHTML = html;
      this.mainContainer.append(newsItem);
      const imgLink = document.querySelector(`#img-link-${index}`);
      imgLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.showOverlay(article);
      });
    });
  }

  async showOverlay(article) {
    this.overlay.style.display = 'block';
    this.overlay.style.visibility = 'visible';
    this.overlay.style.opacity = '1';
    const summaryText = await this.generateNewsSummary(article.bodyText);
    this.overlay.innerHTML = `
    <div class="popup">
    <img src="${article.thumbnail}" alt="Article Image" class="article-img">
    <p class="article-summary">${summaryText[0].summary_text}</p>
    <a href="${article.webUrl}" id="full-article-link">Read Full Article</a>
    <a href="#" id="close-button">Close</a>
    </div>`;

    const closeButton = this.overlay.querySelector('#close-button');
    closeButton.addEventListener('click', () => {
      this.overlay.style.visibility = 'hidden';
      this.overlay.style.opacity = '0';
    });
  }

  displayNewsFromApi() {
    this.newsClient.loadNews(
      (data) => {
        const stories = this.mapNewsData(data);
        this.newsModel.setNews(stories);
        this.displayNews();
      },
      () => {
        this.displayError('Oops - API appears to be down!');
      }
    );
  }

  async generateNewsSummary(bodyText) {
    const summaryText = await this.newsClient.summariseText(bodyText);
    return summaryText;
  }

  mapNewsData(data) {
    const results = data.response.results;
    return results.map(
      ({ webUrl, fields: { headline, thumbnail, standfirst, bodyText } }) => ({
        webUrl,
        headline,
        thumbnail,
        standfirst,
        bodyText,
      })
    );
  }

  displayNewsFromSearch(searchTerm) {
    this.newsClient.searchNews(
      searchTerm,
      (data) => {
        const stories = this.mapNewsData(data);
        this.newsModel.setNews(stories);
        this.displayNews();
      },
      () => {
        this.displayError('Oops - API appears to be down!');
      }
    );
  }

  displayNewsBySection(section) {
    this.newsClient.filterNews(
      section,
      (data) => {
        const stories = this.mapNewsData(data);
        this.newsModel.setNews(stories);
        this.displayNews();
      },
      () => {
        this.displayError('Oops - API appears to be down!');
      }
    );
  }

  displayError(error) {
    const errorMessage = document.createElement('h2');
    errorMessage.className = 'error';
    errorMessage.textContent = error;
    this.mainContainer.append(errorMessage);
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
      .getElementById('header-button-uk')
      .addEventListener('click', () => {
        this.displayNewsBySection('uk-news');
      });
    document
      .getElementById('header-button-politics')
      .addEventListener('click', () => {
        this.displayNewsBySection('politics');
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
