class NewsView {
  constructor(model) {
    this.model = model;
    
  }

  displayHeadlines() {
    const headlines = this.model.getHeadlines();
    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline;
      headlineEl.className = 'headline';
      this.headlinesContainerEl = document.querySelector('#headline-container');
      this.headlinesContainerEl.append(headlineEl);
    });
    
  }
}

module.exports = NewsView;