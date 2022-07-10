class NewsView {
  constructor(model, api) {
    this.api = api
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
  }
  displayHeadlines() {
   const headlines = this.model.getHeadlines();
   this._addHeadlinesToPage(headlines)
  }

  displayHeadlinesfromAPI() {
    this.api.loadHeadlines((headlines) => {
      this.model.setHeadlines(headlines)
      this.displayHeadlines();
      // this._createEventListeners();
    })
  }

  _addHeadlinesToPage(headlines) {
    headlines.forEach((headline) => {
    const imageEl = document.createElement('img');
    imageEl.className = 'thumbnail';
    imageEl.src = headline.fields.thumbnail;
    const headlineEl = document.createElement('div');
    headlineEl.innerText = headline.fields.headline;
    headlineEl.className = 'headline';
    headlineEl.setAttribute('href', headline.webUrl);
    this.mainContainerEl.append(imageEl)
    this.mainContainerEl.append(headlineEl)
  })
  }
  // createEventListeners() {
  //   const headlines = document.querySelectorAll('div.headline');
  //   console.log(headlines);
  //   headlines.forEach((headline) => {
  //     headline.addEventListener('click', () => {
  //       window.location.replace(headline.href);
  //     })
  //   })
  // }
}

module.exports = NewsView
