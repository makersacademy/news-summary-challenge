class ArticleSummaryView {
  constructor(article = new Article){
    this.article = article
  }  

  returnHTML(){
    return `<div>${this.article.returnSummary()}</div>`
  }
}