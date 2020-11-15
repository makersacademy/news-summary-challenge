class ArticleController {
  constructor(articleList = new ArticleList){
    this.articles = articleList
    this.articles.addArticle('Test Header', 'Test Summary')
    this.articles.addArticle('Test Header 2', 'Test Summary 2')
    this.listView = new ArticleHeadlineListView(this.articles)
  }

  renderHeadlines(listView = this.listView){
    document.getElementById("app").innerHTML = listView.returnHTML()
  }
}

let newsController = new ArticleController
newsController.renderHeadlines()

