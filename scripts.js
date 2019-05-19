// Create a request variable and assign a new XMLHttpRequest object to it:
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api', true)

request.onload = function() {
  // Begin accessing JSON data here

  var data = JSON.parse(this.response)

  if(request.status >= 200 && request.status < 400) {
    data.response.results.forEach(article => {
      console.log(article.sectionName)
      console.log(article.webTitle)
      console.log(article.webURL)
    })
  } else {
    console.log('error')
  }
}

// Send request

request.send()

const app = document.getElementById('root')
