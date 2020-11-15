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

  renderSummary(id){
    let fetchedArticle = this.articles.getArticle(id)
    let articleSummaryView = new ArticleSummaryView(fetchedArticle)
    document.getElementById("app").innerHTML = articleSummaryView.returnHTML()
  }
}

let newsController = new ArticleController
newsController.renderHeadlines()

window.addEventListener('hashchange', function(event){
  if (event.newURL.slice(-1) == '/') {
    noteController.render()
  } else {
    let id = event.newURL.slice(-1)
    newsController.renderSummary(id)
  }
})