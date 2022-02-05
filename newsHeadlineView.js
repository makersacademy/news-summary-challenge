class NewsHeadlineView {
  constructor(api) {
    this.api = api; 
    this.mainContainerEl = document.querySelector('#main-container')

    const searchInputEl = document.querySelector('#search-input')
    const submitButtonEl = document.querySelector('#submit-button')
    

    
    this.api.getHeadlines('UK', returnData => {
      this.returnData = returnData;
      console.log(returnData)
      this.displayNews() 
    })  

    submitButtonEl.addEventListener('click', () => {
      const search = searchInputEl.value

      this.api.getHeadlines(`${search}`, returnData => {
        this.returnData = returnData;
        this.displayNews()
      })
    })
  }

    displayNews() {
      document.querySelectorAll('a').forEach(element => {
        element.remove()
      })

      console.log(this.returnData)
      this.returnData.response.results.forEach(article => {
        const articleContainerEl = document.createElement('div')
        const articleEl = document.createElement('a');
        const avatarEl = document.createElement('img')

        articleEl.setAttribute('href', article.webUrl)
        articleEl.innerText = article.fields.headline
        avatarEl.src = article.fields.thumbnail


        this.mainContainerEl.append(articleContainerEl)
        articleContainerEl.append(articleEl)
        articleEl.append(avatarEl); 
      })
    }
  }
module.exports = NewsHeadlineView



// SEARCH BAR
// `https://content.guardianapis.com/search?q=${}&api-key=471c3b91-05b6-4377-81e7-16d75aee68f7`