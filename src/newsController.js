class newsController {
  constructor() {
    this.articles = []
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
//guardian doesn't seem to accept being iframed leaving this out
  createIframe = (articleLink) => {
    var ifrm = document.createElement("iframe")
    var p =document.getElementById('placeholder')
    // document.body.appendChild('ifrm')
    p.parentNode.insertBefore(ifrm, p)
    ifrm.setAttribute("src", articleLink)
  }

}

