class ArticleSummaryView {
  constructor(article = new Article){
    this.article = article
  }  

  returnHTML(){
    return `<div id="summary">${this.article}</div>`
  }
}