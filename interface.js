
// var http = new XMLHttpRequest()
var guardianUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&show-fields=body&q=news"
var aylienURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
// http.open("GET", url)
// http.send()

function listHeadlines() {
  fetch(guardianUrl)
  .then(result => result.json())
  .then(headlines => {
    console.log(headlines)
    var page = document.getElementById('page')
    listformater.headlines(headlines).forEach(function(headline){
      a = document.createElement("a")
      br = document.createElement("BR")
      br2 = document.createElement("BR")
      a.setAttribute("href", headline.webUrl)
      link = document.createElement("a")
      link.setAttribute('href', "#/"+ headline.id)
      link.innerHTML = "View Summary"
      a.innerHTML = headline.webTitle
      page.appendChild(a)
      page.appendChild(br2)
      page.appendChild(link)
      page.appendChild(br)
      })
  })
}



function summary(id) {
  fetch(guardianUrl)
  .then(result => result.json())
  .then(headlines => {
    headlines
    window.addEventListener("hashchange", function(object){
    var newURL = object.newURL
    var idFromHash = newURL.split("#")[1]
    headlines.response.results.forEach(function(article){
      if ("/" + article.id === idFromHash) {
        selectedArticle = article
      }
    })

    fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + selectedArticle.webUrl)
      .then(result => result.json())
      .then(json => {
        summaryContent = document.getElementById('summary')
        json.sentences.join(' ')
        var summary = document.getElementById('summary')
        summary.innerHTML = `<h2>${selectedArticle.webTitle}</H2><p>${json.sentences.join(' ')}</p>`
      })
    })
  })
}
