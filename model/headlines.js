function Headlines(api) {
  this.api = api
}

Headlines.prototype.getHeadlines = function () {
  var request = new XMLHttpRequest()

  request.open('GET', this.api, true)

  var returnedData = request.onload = function() {
    var data = JSON.parse(this.response)

    var titles = data.response.results.forEach(result => {
      console.log(result.webTitle)
    })
  }

  request.send()
};
