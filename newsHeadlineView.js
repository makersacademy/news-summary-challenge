class NewsHeadlineView {
  constructor(api) {
    this.api = api; 
    this.mainContainerEl = document.querySelector('#main-container')
  
    this.api.getHeadlines('UK', returnData => {
      this.returnData = returnData;
      console.log(returnData)
      this.displayNews() 
    })  
  }

    displayNews() {
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



