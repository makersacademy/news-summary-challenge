class ArticleList {
  constructor() {
    this.headlines = []
  }

  returnHeadlines(){
    return this.headlines
  }

  addHeadline(title, summary){
    let article = new Article(title, summary)
    this.headlines.push(article.returnTitle())
  }
}