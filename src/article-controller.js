class ArticleController {
  constructor(newsAPI = "http://content.guardianapis.com"){
    this.newsAPI = newsAPI
  }

  // fetchCurrentArticles(){
  //   let search = "/search"
  //   let qString = `from-date=${}`
  //   let url = this.newsAPI + search + qString
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       const json = JSON.parse(this.responseText);
  //       var array = json.response.results
  //       console.log(array[0])
  //       document.getElementById("app").innerHTML = array[0].webTitle;
  //     }
  //   };
  //   xhttp.open("GET", url, true);
  //   xhttp.send();
  // }

  renderHeadlines(listView = this.listView){
    document.getElementById("app").innerHTML = listView.returnHTML()
  }

  renderSummary(id){
    let fetchedArticle = this.articles.getArticle(id)
    let articleSummaryView = new ArticleSummaryView(fetchedArticle)
    document.getElementById("app").innerHTML = articleSummaryView.returnHTML()
  }

  currentDate(){
    return (new Date().toJSON().slice(0,10))
  }
}

// let newsController = new ArticleController
// newsController.renderHeadlines()

// window.addEventListener('hashchange', function(event){
//   if (event.newURL.slice(-1) == '/') {
//     noteController.render()
//   } else {
//     let id = event.newURL.slice(-1)
//     newsController.renderSummary(id)
//   }
// })