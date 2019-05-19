const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'YOUR API KEY HERE', true)

request.onload = function() {
  var data = JSON.parse(this.response)

  if(request.status >= 200 && request.status < 400) {
    data.response.results.forEach(article => {
      // create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = article.sectionName

      const h2 = document.createElement('h2')
      h2.textContent = article.webTitle

      const p = document.createElement('p')
      p.textContent = article.webUrl

      container.appendChild(card)

      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(p)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Sorry, not working`
    app.appendChild(errorMessage)
  }
}

request.send()
