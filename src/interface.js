const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?from-date=2020-07-26&api-key=05466685-3287-4979-b598-f879642b7010')
request.onload = function() {

  var data = JSON.parse(this.response)
  console.log(data.response.results)

  if (request.status >= 200 && request.status < 400) {
    data.response.results.forEach((article) => {

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const title = document.createElement('h1')
      title.textContent = article.webTitle

      const link = document.createElement('a')
      link.textContent = "See the full story here"


      link.setAttribute('href',(article.webUrl));

      console.dir(title)


      container.appendChild(card)

      card.appendChild(title)
      card.appendChild(link)

    })
  } else {
    console.log('error')
  }
}

request.send()
