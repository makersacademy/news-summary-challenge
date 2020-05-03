"use-strict";

function guardianAPI() {
}

guardianAPI.prototype.makeRequest = function(url) {
  var request = new XMLHttpRequest()

request.open('Get', url)

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <400) {
    data.response.results.forEach(group => {
      console.log(group)
    })
  }
}
request.send()
}
