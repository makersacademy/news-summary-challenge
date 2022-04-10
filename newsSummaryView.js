const GuardianApi = require('./guardianApi');
const NewsSummaryModel = require('./newsSummaryModel');

class NewsSummaryView {
  constructor(newsModel, guardianApi) {
    this.mainContainer = document.querySelector('#main-container');
    this.model = newsModel;
    this.guardianApi = guardianApi;

    this.inputSearch = document.querySelector('#search-input');
    this.buttonEl = document.querySelector('#search-button');

    this.guardianApi.getHeadlines(newsData => {
      this.model.addNews(newsData);
      this.displayNews();
    });

    this.buttonEl.addEventListener('click', () => {
      this.guardianApi.searchHeadlines(`${this.inputSearch.value}`, newsData => {
        this.model.addNews(newsData);
        this.inputSearch.value = '';
        this.displayNews();
      });
    });
  }

  displayNews() {
    document.querySelectorAll('.headline').forEach(el => el.remove());

    const news = this.model.getNews();

    news.forEach(article => {
      const headlineEl = document.createElement('div');
      headlineEl.className = 'headline';

      const hrefEl = document.createElement('a');
      hrefEl.className = 'headline-link';
      hrefEl.setAttribute('target', '_blank');
      hrefEl.href = article.webUrl;
      hrefEl.innerText = article.webTitle;

      const imgEl = document.createElement('img');
      imgEl.className = 'headline-img';
      imgEl.src = article.fields.thumbnail;

      headlineEl.append(imgEl);
      headlineEl.append(hrefEl);

      this.mainContainer.append(headlineEl);
    });

    console.log(this.mainContainer);
  }
}

module.exports = NewsSummaryView;
