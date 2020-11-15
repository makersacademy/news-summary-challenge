class ArticleController {
  constructor(newsAPI = "http://content.guardianapis.com"){
    this.newsAPI = newsAPI
    // 78fb758b-9cd0-48e8-96c1-fe29eb42c6d0
  }

  fetchCurrentArticles(){
    let xhttp = new XMLHttpRequest();
    let search = "/search"
    // use makers API key thing - not meant to hardcode key
    let qString = `?from-date=${this._currentDate()}&show-elements-image&show-fields=headline&api-key=test`
    let url = this.newsAPI + search + qString
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let articleHeadlineListView = new ArticleHeadlineListView(this._retrieveArticleInfo(xhttp.responseText))
        this._changeInnerHTML(articleHeadlineListView.returnHTML())
      }
    }.bind(this)
    xhttp.open("GET", url, true);
    xhttp.send()
  }

  _retrieveArticleInfo(responseText){
    let articleList = new ArticleList
    let allArticles = JSON.parse(responseText).response.results
    allArticles.forEach(article => {
      articleList.addArticle(article.fields.headline, article.webURL)
    })
    return articleList
  }

  _changeInnerHTML(newHTML){
    document.getElementById("app").innerHTML = newHTML
  }

  // renderHeadlines(listView = this.listView){
  //   document.getElementById("app").innerHTML = listView.returnHTML()
  // }

  // renderSummary(id){
  //   let fetchedArticle = this.articles.getArticle(id)
  //   let articleSummaryView = new ArticleSummaryView(fetchedArticle)
  //   document.getElementById("app").innerHTML = articleSummaryView.returnHTML()
  // }

  _currentDate(){
    return (new Date().toJSON().slice(0,10))
  }
}

let newsController = new ArticleController
newsController.fetchCurrentArticles()

// newsController.renderHeadlines()

// window.addEventListener('hashchange', function(event){
//   if (event.newURL.slice(-1) == '/') {
//     noteController.render()
//   } else {
//     let id = event.newURL.slice(-1)
//     newsController.renderSummary(id)
//   }
// }) 