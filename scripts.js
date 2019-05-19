const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it:
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api key hidden', true)

request.onload = function() {
  // Begin accessing JSON data here

  var data = JSON.parse(this.response)

  if(request.status >= 200 && request.status < 400) {
    data.response.results.forEach(article => {
      // create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // create an h1 and set the text content to the article's title
      const h1 = document.createElement('h1')
      h1.textContent = article.sectionName

      const h2 = document.createElement('h2')
      h2.textContent = article.webTitle

      // create a p and set the text content to the article URL
      const p = document.createElement('p')
      p.textContent = article.webURL

      container.appendChild(card)

      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(p)


      // console.log(article.sectionName)
      // console.log(article.webTitle)
      // console.log(article.webURL)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Sorry, not working`
    app.appendChild(errorMessage)
    // console.log('error')
  }
}

// Send request

request.send()
