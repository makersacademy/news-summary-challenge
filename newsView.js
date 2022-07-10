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
      this.displayHeadlines()
    })
  }

  _addHeadlinesToPage(headlines) {
    headlines.forEach((headline) => {
    const imageEl = document.createElement('img');
    imageEl.className = 'thumbnail';
    imageEl.src = headline.thumbnail;
    const headlineEl = document.createElement('div');
    headlineEl.innerText = headline.headline;
    headlineEl.className = 'headline'
    this.mainContainerEl.append(imageEl)
    this.mainContainerEl.append(headlineEl)
  })
  }
}

module.exports = NewsView
