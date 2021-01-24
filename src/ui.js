class UI {

  constructor(){
    this.articlesContainer = document.getElementById('articles')
  }

  paint(results) {
    let articlesDiv = ''
    let count = 0
      results.forEach(element => {
        this.title = element.webTitle
        this.cata = element.sectionName
        this.apiLink = element.apiUrl.replace('https', 'http')
        this.link = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${this.apiLink}`
        let articleShortDiv = `<div><h3 id="${count}"><a href="${this.link}">${this.cata}: ${this.title}</a></h3></div>`
        articlesDiv += articleShortDiv
        count++
      });
      this.articlesContainer.innerHTML = articlesDiv
  }

}