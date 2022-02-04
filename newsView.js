class NewsView {
  constructor(newsModel, newsApi) {
    this.newsModel = newsModel;
    this.newsApi = newsApi;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const headlines = this.newsModel.getHeadlines();

    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline;
      headlineEl.className = 'headline';
      this.mainContainerEl.append(headlineEl);
    });
  }
}

module.exports = NewsView;