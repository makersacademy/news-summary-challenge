class ArticleController {
  constructor(articleHeadlineListView = new ArticleHeadlineListView){
    this.headlines = articleHeadlineListView
  }

  renderHeadlines(){
    document.getElementById("app").innerHTML = this.headlines.returnHTML()
  }
}