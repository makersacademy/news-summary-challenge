class NewsView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayHeadlines() {
    const headlines = this.model.getHeadlines();

    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.className = 'headline';
      headlineEl.innerText = headline;
      this.mainContainerEl.append(headlineEl);
    });
  
  }
}

module.exports = NewsView;