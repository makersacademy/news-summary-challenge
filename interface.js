
// var http = new XMLHttpRequest()
var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&q=news"
// http.open("GET", url)
// http.send()

function listHeadlines() {
  fetch(url)
  .then(result => result.json())
  .then(headlines => {
    console.log(headlines)
    page = document.getElementById('page')
    listformater.headlines(headlines).forEach(function(headline){
      a = document.createElement("a")
      br = document.createElement("BR")
      a.setAttribute("href", headline.webUrl)
      a.innerHTML = headline.webTitle
      page.appendChild(a)
        page.appendChild(br)
      })
  })
}
