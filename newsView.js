class NewsView{
  constructor(model, client) {
    this.model = model
    this.client = client
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#search-form')
    
    this.searchButtonEl = document.querySelector('#search-button')
    this.searchButtonEl.addEventListener('click', async () => {
      const user_input = this.inputEl.value
      try {
        if (user_input === "") {throw new Error("You need to search for something")}
        this.resetPageContents()
        await this.retrieveArticlesFromApi(user_input)
        this.displayPage()
      } catch (err){
        this.displayError(err)
      }
    })
    
    this.homeButtonEl = document.querySelector('#home-button')
    this.homeButtonEl.addEventListener('click', async () => {
      try {
      this.resetPageContents()
      await this.retrieveArticlesFromApi()
      this.displayPage()
      } catch (err) {
      this.displayError(err)
      }
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

  displayError = (error) => {
    this.resetPageContents()
    const new_row = document.createElement('div')
    new_row.className = 'error'
    new_row.textContent = error
    this.mainContainerEl.append(new_row)
  }

  displayPage = () => {
    const all_article_data = this.model.getArticles()
    if (all_article_data.length === 0) {throw new Error('No articles found.')}
    all_article_data.forEach(article => {
      const new_div = document.createElement('div')
      new_div.className = 'article'
      const new_link = document.createElement('a')
      new_link.textContent = article.webTitle
      new_link.href = article.webUrl
      const new_img = document.createElement('img')
      // Guardian API does not work properly
      // new_img.src = article.fields.thumbnail
      new_img.src = 'https://picsum.photos/200/300'
      new_img.className = 'article-image'
      new_div.append(new_link, new_img)
      this.mainContainerEl.append(new_div)
    })
  }
}

module.exports = NewsView