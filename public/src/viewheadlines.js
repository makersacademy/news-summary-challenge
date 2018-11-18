headlines = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2CtrailText&format=JSON"
test = "https://content.guardianapis.com/search?api-key=test&show-fields=trailText,thumbnail"

var getHeadlines = function(url) {
  var request = new Request(url, {
  })
  fetch(request).then(response => response.json())
  .then((data) => {
    console.log(data.response.results)
    displayHeadlines(data.response.results)
  })
}

getHeadlines(test)

displayHeadlines = function(results) {
  for(i=0;i<results.length;i++){
    addImage(results, i)
    addTitle(results, i)
  }
}

addTitle = function(results, i) {
  var a = document.createElement("A")
   var title = results[i].webTitle
   var link = results[i].webUrl
   var imgUrl = results[i].fields.thumbnail
   var headline = document.createTextNode(title)
   a.setAttribute('href', link)
   a.appendChild(headline)
   document.getElementById('headlines_container').appendChild(a)
   b = document.createElement("BR")
   document.getElementById('headlines_container').appendChild(b)
}

addImage = function(results, i) {
  var imgUrl = results[i].fields.thumbnail
  var img = document.createElement("IMG")
  img.setAttribute('src', imgUrl)
  img.setAttribute('width', '100px')
  document.getElementById('headlines_container').appendChild(img)
}
