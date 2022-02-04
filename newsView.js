class NewsView {
  constructor(newsModel) {
    this.newsModel = newsModel;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const headlines = this.newsModel.getNews();

    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline;
      headlineEl.className = 'headline';
      this.mainContainerEl.append(headlineEl);
    });
  }
}

module.exports = NewsView;