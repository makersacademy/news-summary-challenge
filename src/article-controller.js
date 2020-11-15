class ArticleController {
  constructor(newsAPI = "http://content.guardianapis.com"){
    this.newsAPI = newsAPI
    // 78fb758b-9cd0-48e8-96c1-fe29eb42c6d0
    this.mockXMLResponse = {
      "response": {
        "status": "ok",
        "userTier": "developer",
        "total": 137,
        "startIndex": 1,
        "pageSize": 10,
        "currentPage": 1,
        "pages": 14,
        "orderBy": "newest",
        "results": [
          {
            "id": "sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
            "type": "liveblog",
            "sectionId": "sport",
            "sectionName": "Sport",
            "webPublicationDate": "2020-11-15T15:43:42Z",
            "webTitle": "The Masters 2020: Dustin Johnson leads final round at Augusta – live!",
            "webUrl": "https://www.theguardian.com/sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
            "apiUrl": "https://content.guardianapis.com/sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live",
            "headline": "The Masters 2020: Dustin Johnson leads final round at Augusta – live!",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
            "type": "liveblog",
            "sectionId": "world",
            "sectionName": "World news",
            "webPublicationDate": "2020-11-15T15:42:49Z",
            "webTitle": "Coronavirus live news: German minister predicts five more months of 'severe restrictions'; Greece shuts primary schools",
            "webUrl": "https://www.theguardian.com/world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
            "apiUrl": "https://content.guardianapis.com/world/live/2020/nov/15/coronavirus-live-news-us-confirms-177000-daily-cases-as-victoria-marks-16-days-with-no-infections",
            "headline": "Coronavirus live news: German minister predicts five more months of 'severe restrictions'; Greece shuts primary schools",
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
          }
        ]
      }
    }
  }

  fetchCurrentArticles(){
    // let xhttp = new XMLHttpRequest();
    // let search = "/search"
    // // use makers API key thing - not meant to hardcode key
    // let qString = `?from-date=${this._currentDate()}&show-elements-image&show-fields=headline&api-key=test`
    // let url = this.newsAPI + search + qString
    // xhttp.onreadystatechange = function() {
    //   if (xhttp.readyState == 4 && xhttp.status == 200) {
    //     let articleHeadlineListView = new ArticleHeadlineListView(this._retrieveArticleInfo(xhttp.responseText))
    //     this._changeInnerHTML(articleHeadlineListView.returnHTML())
    //   }
    // }.bind(this)
    // xhttp.open("GET", url, true);
    // xhttp.send()
    let articleHeadlineListView = new ArticleHeadlineListView(this._retrieveArticleInfo(this.mockXMLResponse))
    this._changeInnerHTML(articleHeadlineListView.returnHTML())
  }

  _retrieveArticleInfo(responseText){
    let articleList = new ArticleList
    let articles = JSON.stringify(responseText)
    let allArticles = JSON.parse(articles).response.results
    console.log(allArticles)
    allArticles.forEach(article => {
      articleList.addArticle(article.headline, article.webURL)
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