function GetAPIData() {
  this.newsData = {};
  // var self = this
}




// GetAPIData.makeRequest(returnResponse)

GetAPIData.prototype.makeRequest = function(callback) {

  var self = this

  // new API request
  var request = new XMLHttpRequest()
  // Open new connection using the GET request on URL endpoint
  request.open('Get', "https://content.guardianapis.com/search?api-key="+apiKey, true)

  request.onload = function() {
    var newsData = JSON.parse(request.response)
    console.log(newsData)

    if (request.status >= 200 && request.status < 400) {
      // this.newsData = newsData
      console.log(newsData);
      callback(newsData)
      return newsData
      // self.newsData = this.newsData

    } else {
      console.log('error')
    }
    // console.log(this.newsData);
    // return this.newsData
    self.newsData = newsData

  }


  request.send()
}
