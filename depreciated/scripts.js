"use-strict";

var request = new XMLHttpRequest()

request.open('Get', 'http://content.guardianapis.com/search?q=headlines&show-fields=headline,thumbnail,body,shortUrl,bodyText&api-key=test')

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <400) {
    data.response.results.forEach(group => {
      console.log(group)
      article = group.fields
      const link = document.createElement('a')
      link.href = article.shortUrl

      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      card.href = article.shortUrl

      const h2 = document.createElement('h2')
      h2.textContent = article.headline

      const img = document.createElement('img')
      img.src = article.thumbnail
  

      const p = document.createElement('p')
      p.textContent = article.bodyText.substring(0,300) +'...'

      container.appendChild(link)
      link.appendChild(card)
      card.appendChild(h2)
      card.appendChild(img)
      card.appendChild(p)

    })
  }
}

request.send()

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

