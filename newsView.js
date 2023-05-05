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
      await this.retrieveArticlesFromApi()
      this.displayPage()
    })
  }

  retrieveArticlesFromApi = async (input) => {
    const result = await this.client.loadArticles(input)
    this.model.setArticles(result.response.results)
  }
  

  resetPageContents = () => {
    const all_articles = document.querySelectorAll('div.article, div.error')
    all_articles.forEach(article => article.remove())
  }

  displayPage = () => {
    const all_article_data = this.model.getArticles()
    if (all_article_data.length === 0) {throw new Error('No articles found.')}
    all_article_data.forEach(article => {
      const new_div = document.createElement('div')
      new_div.className = 'article'
      new_div.textContent = article.webTitle
      this.mainContainerEl.append(new_div)
    })
  }
}

module.exports = NewsView