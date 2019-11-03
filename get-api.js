var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=4c4f5351-da4c-4861-a59c-aa7e44e4c193', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var articles = data.response.results
  articles.forEach(function(entry) {
    webTitle = entry.webTitle
    webUrl = entry.webUrl
  });
}

request.send()
