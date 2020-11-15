class ArticleController {
  constructor(articleList = new ArticleList){
    this.articles = articleList
    this.articles.addArticle('Test Header', 'Test Summary')
    this.listView = new ArticleHeadlineListView(this.articles)
  }

  renderHeadlines(){
    document.getElementById("app").innerHTML = this.listView.returnHTML()
  }
}

let newsController = new ArticleController
newsController.renderHeadlines()