class NewsView{
  constructor(model, client) {
    this.model = model
    this.client = client
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#search-form')
    this.searchButtonEl = document.querySelector('#search-button')
    
    this.homeButtonEl = document.querySelector('#home-button')
    this.homeButtonEl.addEventListener('click', async () => {
      this.resetPageContents()
      await this.getArticles()
      this.displayPage()
    })
  }

  getArticles = async (input) => {
    const result = await this.client.loadArticles(input)
    this.model.setArticles(result.response.results)
  }

  resetPageContents = () => {
    //
  }

  displayPage = () => {
    //
  }
}

module.exports = NewsView