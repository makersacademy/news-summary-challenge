class NewsView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container')
  }
  displayHeadlines() {
    const headlineEl = document.createElement('div');
    headlineEl.innerText = "Example Headline";
    headlineEl.className = 'headline'
    this.mainContainerEl.append(headlineEl)
  }
}

module.exports = NewsView
