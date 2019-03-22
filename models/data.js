function GetAPIData() {
  // this.newsData = {};
  var self = this
}

GetAPIData.prototype.makeRequest = function(callback) {
  // new API request
  var request = new XMLHttpRequest()
  // Open new connection using the GET request on URL endpoint
  request.open('Get', "https://content.guardianapis.com/search?api-key="+apiKey+"&show-fields=starRating,body,trailText,headline,thumbnail", true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var newsData = JSON.parse(request.response)
      callback(newsData)
    } else {
      console.log('error')
    }
  }
  request.send()
}
