const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')
 
app.appendChild(container) 

var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=c7698374-44e2-4f01-bbca-a4f789a9cd9a', true)

request.onload = function () {
  var news = JSON.parse(this.response)

  var data = news.response.results

  if (request.status >= 200 && request.status < 400) {
    data.forEach(article => {
    
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
    
      const h1 = document.createElement('h1')
      h1.textContent = article.webTitle
      // const p = document.createElement('p')
      // p.textContent = article.webURL

      container.appendChild(card)

      card.appendChild(h1)
      // card.appendChild(p)
    })
} else {
  console.log('error')
  }
}
request.send()
