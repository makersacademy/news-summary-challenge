class ArticleHeadlineList {
  constructor() {
    this.headlines = []
  }

  returnHeadlines(){
    return this.headlines
  }

  addHeadline(title){
    let articleHeadline =new ArticleHeadline(title)
    this.headlines.push(articleHeadline)
  }
}