class ArticleController {
  constructor(newsAPI = "http://content.guardianapis.com"){
    this.newsAPI = newsAPI
  }

  fetchCurrentArticles(){
    let xhttp = new XMLHttpRequest();
    let search = "/search"
    let qString = `?from-date=${this._currentDate()}&show-elements-image&show-fields=headline&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0`
    let url = this.newsAPI + search + qString
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let articleList = new ArticleList
        let json = JSON.parse(this.responseText);
        let allArticles = json.response.results
        allArticles.forEach(article => {
          articleList.addArticle(article.fields.headline, 'Summarised News')
        })
        let articleHeadlineListView = new ArticleHeadlineListView(articleList)
        document.getElementById("app").innerHTML = articleHeadlineListView.returnHTML();
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
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