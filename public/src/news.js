const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src='images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


fetch('https://content.guardianapis.com/search?api-key=3d1bd118-3d6f-4211-a61e-3d0f966b08bb')
.then(response => {
  return response.json()
})
.then(data => {
  //Work with JSON datahere
    data.response.results.forEach(news => {
     const card = document.createElement('div')
     card.setAttribute('class', 'card')
     const h1 = document.createElement('h1')
     h1.textContent = news.webTitle
     const p = document.createElement('p')
     news.webTitle = news.webTitle.substring(0, 100) // Limit to 300 chars
     p.textContent = `${news.webTitle}...` // End with an ellipses

     //Append the cards to the container element
     container.appendChild(card)
     //Each card will contain an h1 and a p
     card.appendChild(h1)
     card.appendChild(p)
  })
})
.catch(err => {
   const errorMessage = document.createElement('marquee')
   errorMessage.textContent = `Gah, it's not working!`
   app.appendChild(errorMessage)
})
