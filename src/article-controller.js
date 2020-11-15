class ArticleController {
  constructor(newsAPI = "http://content.guardianapis.com", articleList = new ArticleList){
    this.newsAPI = newsAPI
    // "http://content.guardianapis.com"
    this.articleList = articleList
  }

  renderCurrentArticles(){
    // use makers API key thing - not meant to hardcode key
    let url = `${this.newsAPI}/search?from-date=${this._currentDate()}&show-fields=headline%2Cthumbnail&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0`

    this.httpGetAsync(url, function(response){
      let allArticles = JSON.parse(response).response.results
      allArticles.forEach(article => {
        this.articleList.addArticle(article.fields.headline, article.id, article.fields.thumbnail)
      })
      let articleHeadlineListView = new ArticleHeadlineListView(this.articleList)
      document.getElementById("app").innerHTML = articleHeadlineListView.returnHTML()
    }.bind(this))
  }

  renderSummary(id){
    // use url to put through aylien summarisation
    let fetchedArticle = this.articleList.getArticle(id)
    let qString = `/${fetchedArticle.returnUrlId()}?show-fields=body&api-key=test`
    let url = this.newsAPI + qString
    this.httpGetAsync(url, function(response){
      let summaryInfo = JSON.parse(response).response.content.fields.body
      let articleSummaryView = new ArticleSummaryView(summaryInfo)
      document.getElementById("app").innerHTML = articleSummaryView.returnHTML()
    })
  }

  httpGetAsync(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText)
      }
    }.bind(this)
    xhttp.open("GET", url, true);
    xhttp.send()
  }

  // _retrieveArticleHeadlines(responseText){
  //   // normall no stringify, normally .fields.headline
  //   // let articles = JSON.stringify(responseText)
  //   let allArticles = JSON.parse(responseText).response.results
  //   allArticles.forEach(article => {
  //     this.articleList.addArticle(article.fields.headline, article.id)
  //   })
  //   return this.articleList
  // }

  _currentDate(){
    return (new Date().toJSON().slice(0,10))
  }
}

let newsController = new ArticleController
newsController.renderCurrentArticles()

window.addEventListener('hashchange', function(event){
  if (event.newURL.slice(-1) == '/') {
    newsController.renderCurrentArticles()
  } else {
    let id = event.newURL.slice(-1)
    newsController.renderSummary(id)
  }
}) 