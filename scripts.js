"use-strict";

var request = new XMLHttpRequest()

request.open('Get', 'https://content.guardianapis.com/search?q=headlines&api-key=1cca0ba4-fb88-457c-904c-1517fac2b7f1')

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <400) {
    data.response.results.forEach(a => {
      console.log(a)
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h2 = document.createElement('h2')
      h2.textContent = a.webTitle

      const more = document.createElement('a')
      more.textContent = "click here for more"
      more.href = a.webUrl

      container.appendChild(card)
      card.appendChild(h2)
      card.appendChild(more)
    })
  }
}

request.send()

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

