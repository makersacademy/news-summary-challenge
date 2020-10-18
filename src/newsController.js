class newsController {
  constructor() {
    this.articles = []
    this.lastHash;
  }

  sortsNews = (news)  => {
    for(var i = 0; i <=news.response.results.length-1; i++){
      console.log(new newsItem(news.response.results[i]))
      this.articles.push(new newsItem(news.response.results[i]))
    }
  }

  updatesTitlesHTML = (articles) => {
    var myDiv = document.createElement("div")
    var myString = ''
    for(var i = 0; i <= articles.length -1; i++) {
       myString += articles[i].formatTitleHTML() 
    }
    myDiv.innerHTML = myString
    document.body.appendChild(myDiv)
  }

  getSummary = (id) => {
    return this.articles.filter(function(article){return article.id == id})[0].getSummaryText()
  }

  removePreviousSummary = (id) => {
    if(id){
    var oldSummaryDiv = document.getElementById(id)
    oldSummaryDiv.innerHTML = ''}
  }

  addSummaryHTML = (id) => {
    var summaryDiv = document.getElementById(id)
    summaryDiv.innerHTML = this.getSummary(id)
  }

  hashChanged() {
    this.removePreviousSummary(this.lastHash)
    this.lastHash = window.location.hash.split('#/')[1]
    this.addSummaryHTML(this.lastHash)
  }

//guardian doesn't seem to accept being iframed leaving this out
  createIframe = (articleLink) => {
    var ifrm = document.createElement("iframe")
    var p =document.getElementById('placeholder')
    // document.body.appendChild('ifrm')
    p.parentNode.insertBefore(ifrm, p)
    ifrm.setAttribute("src", articleLink)
  }

}

window.addEventListener("hashchange", function() {controller.hashChanged()})
