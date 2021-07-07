document.getElementById("page-token").innerHTML = 'hello'


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=1a6038a3-c859-4136-a89e-2f6a18c3c245', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(article => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = article.title

      const p = document.createElement('p')
      article.description = article.description.substring(0, 300)
      p.textContent = `${article.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
