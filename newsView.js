class NewsView {
  constructor(model) {
    this.model = model;
    
  }

  displayHeadlines() {
    const headlines = this.model.getHeadlines();
    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline["headline"];
      headlineEl.className = 'headline';
      this.headlinesContainerEl = document.querySelector('#headline-container');
      this.headlinesContainerEl.append(headlineEl);
      const imageEl = document.createElement('img')
      imageEl.className = 'headlineImage'
      imageEl.src = headline["thumbnail"]
      this.headlinesContainerEl.append(imageEl)
    });
  }
  setImageSrc(data) {
    data
  }
}

module.exports = NewsView;