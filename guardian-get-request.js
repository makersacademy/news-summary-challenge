var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=c7698374-44e2-4f01-bbca-a4f789a9cd9a', true)

request.onload = function () {
  var news = JSON.parse(this.response)

  var data = news.response.results

  if (request.status >= 200 && request.status < 400) {
    data.forEach(article => {

    console.log(article.webTitle)
  })
} else {
  console.log('error')
}

}

request.send()
