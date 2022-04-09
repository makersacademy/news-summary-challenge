const GuardianApi = require('./guardianApi.js');

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
      const newsEl = document.createElement('div');
      newsEl.innerText = news.webTitle;
      newsEl.className = 'headline';
      this.mainContainer.append(newsEl);
    });

    console.log(this.mainContainer);
  }
}

module.exports = NewsSummary;