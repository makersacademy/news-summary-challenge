class ArticleSummaryView {
  constructor(articleBody){
    this.articleBody = articleBody
  }  

  returnHTML(){
    return `<div id="summary">${this.articleBody}</div>`
  }
}