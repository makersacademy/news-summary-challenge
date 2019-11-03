const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)


var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=4c4f5351-da4c-4861-a59c-aa7e44e4c193', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var articles = data.response.results
  articles.forEach(function(entry) {
    webTitle = entry.webTitle
    webUrl = entry.webUrl
    apiUrl = entry.apiUrl

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    h1.textContent = webTitle

    // Create a p and set the text content to the film's description
    const p = document.createElement('p')
    p.textContent = webUrl // End with an ellipses

    // Append the cards to the container element
    container.appendChild(card)

    // Each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(p)
  });
}

request.send()
