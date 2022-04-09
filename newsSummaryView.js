const GuardianApi = require('./guardianApi');

class NewsSummary {
  constructor(guardianApi) {
    this.mainContainer = document.querySelector('#main-container');
    this.guardianApi = guardianApi;

    this.guardianApi.getHeadlines('News', newsData => {
      this.newsData = newsData;
      this.displayNews();
    });
  }

  displayNews() {
    document.querySelectorAll('.headline').forEach(el => el.remove());

    this.newsData.forEach(news => {
      const headlineEl = document.createElement('div');
      headlineEl.className = 'headline';

      const hrefEl = document.createElement('a');
      hrefEl.className = 'headline-link';
      hrefEl.setAttribute('target', '_blank');
      hrefEl.href = news.webUrl;
      hrefEl.innerText = news.webTitle;

      const imgEl = document.createElement('img');
      imgEl.className = 'headline-img';
      imgEl.src = news.fields.thumbnail;

      headlineEl.append(imgEl);
      headlineEl.append(hrefEl);

      this.mainContainer.append(headlineEl);
    });

    console.log(this.mainContainer);
  }
}

module.exports = NewsSummary;