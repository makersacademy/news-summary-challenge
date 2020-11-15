class ArticleHeadlineList {
  constructor() {
    this.headlines = []
  }

  returnHeadlines(){
    return this.headlines
  }

  addHeadline(title){
    let article = new Article(title)
    this.headlines.push(article)
  }
}