class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNews() {
    const headlines = this.model.getNews();

    headlines.forEach((headline) => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline;
      headlineEl.className = 'headline';
      this.mainContainerEl.append(headlineEl);
    });
  }
}

module.exports = NewsView;
