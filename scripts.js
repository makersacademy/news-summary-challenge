const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET','your api', true)

request.onload = function() {
  var data = JSON.parse(this.response)

  if(request.status >= 200 && request.status < 400) {
    data.response.results.forEach(article => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = article.sectionName

      const h2 = document.createElement('h2')
      h2.textContent = article.webTitle

      const a = document.createElement('a')
      a.href = `${article.webUrl}`
      a.innerHTML = "CLICK HERE TO READ THIS ARTICLE"

      container.appendChild(card)

      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(a)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Sorry, not working`
    app.appendChild(errorMessage)
  }
}

request.send()
