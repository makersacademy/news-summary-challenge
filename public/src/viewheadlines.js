headlines = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2CtrailText&format=JSON"
test = "https://content.guardianapis.com/search?api-key=test"

var getHeadlines = function(url) {
  var request = new Request(url, {
  })
  fetch(request).then(response => response.json())
  .then((data) => {
    displayHeadlines(data.response.results)
  })
}

getHeadlines(headlines)

displayHeadlines = function(results) {
  for(i=0;i<results.length;i++){
    addTitle(results, i)
  }
}

addTitle = function(results, i) {
  var a = document.createElement("A")
   var title = results[i].webTitle
   var link = results[i].webUrl
   var headline = document.createTextNode(title)
   a.setAttribute('href', link)
   a.appendChild(headline)
   document.getElementById('headlines_container').appendChild(a)
   b = document.createElement("BR")
   document.getElementById('headlines_container').appendChild(b)
}
