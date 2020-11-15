class ArticleHeadlineListView{
  constructor(articleList = new ArticleList){
    this.headlines = articleList.returnHeadlines()
    // assuming argument passed is an object which responds to .returnHeadlines()
  }

  returnHTML(){
    let htmlHeadlineArray = ""
    for (let i = 0; i < this.headlines.length; i++) {
      htmlHeadlineArray += `<li><a href='#articles/${i}'>${this.headlines[i]}</a></li>`
    }
    return `<ul>${htmlHeadlineArray}</ul>`
  }
}