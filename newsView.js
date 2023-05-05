class NewsView{
  constructor(model, client) {
    this.model = model
    this.client = client
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#search-form')

    this.searchButtonEl = document.querySelector('#search-button')
    this.homeButtonEl = document.querySelector('#home-button')
    this.homeButtonEl.addEventListener('click', () => {
      console.log('I was clicked')
    })
  }
}

module.exports = NewsView