class Article {
  constructor(newsAPI = "http://content.guardianapis.com", articleList = new ArticleList){
    this.newsAPI = newsAPI
    this.articleList = articleList
  }

  fetchCurrentArticles(){
    let url = `${this.newsAPI}/search?from-date=${this._currentDate()}&show-fields=headline%2Cthumbnail&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0`
    this._clearArticleArray()

    this._httpGetAsync(url, function(response){
      let allArticles = JSON.parse(response).response.results
      allArticles.forEach(article => {
        this.articleList.addArticle(article.fields.headline, article.id, article.fields.thumbnail)
      })
      let articleHeadlineListView = new ArticleHeadline(this.articleList)
      document.getElementById("app").innerHTML = articleHeadlineListView.returnHTML()
    }.bind(this))
  }

  renderSummary(id){
    let url = `${this.newsAPI}/${this._retreiveArticle(id).returnUrlId()}?show-fields=body&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0`
    this._httpGetAsync(url, function(response){
      let summaryInfo = JSON.parse(response).response.content.fields.body
      let articleSummaryView = new ArticleSummary(summaryInfo)
      document.getElementById("app").innerHTML = articleSummaryView.returnHTML()
    })
  }

  _httpGetAsync(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText)
      }
    }.bind(this)
    xhttp.open("GET", url, true);
    xhttp.send()
  }

  _retreiveArticle(id){
    return this.articleList.getArticle(id)
  }

  _clearArticleArray(){
    this.articleList.articles = []
  }

  _currentDate(){
    return (new Date().toJSON().slice(0,10))
  }
}

window.addEventListener('hashchange', function(event){
  if (event.newURL.slice(-1) == '/') {
    newsController.fetchCurrentArticles()
  } else {
    let id = event.newURL.slice(-1)
    newsController.renderSummary(id)
  }
})  

let newsController = new Article
newsController.fetchCurrentArticles()
