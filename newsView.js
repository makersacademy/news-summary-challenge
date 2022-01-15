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
      //  http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed
      this.headlinesContainerEl.append(imageEl)
    });
  }
  setImageSrc(data) {
    data
  }
}

module.exports = NewsView;