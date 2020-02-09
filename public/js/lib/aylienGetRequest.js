
var request = new XMLHttpRequest()
var apiURL = `curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${article.}"`
request.open('GET', apiURL, true)
request.onload = function() {
  var data = JSON.parse(this.response)
  data.response.results.forEach(article => {
    var headline = article.webTitle
    var image = article.fields.thumbnail
    var body = article.fields.body
    
  })
}
request.send()
