(function loadPage () {
  newspaper = new Newspaper()
  articles = newspaper.printNews()

  articles.forEach(article => {
    const link = document.createElement('a')
    link.href = article.url
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.href = article.url
    
    const h2 = document.createElement('h2')
    h2.textContent = article.headline
    
    const img = document.createElement('img')
    img.src = article.image
    
    const p = document.createElement('p')
    p.textContent = article.body
    
    const app = document.getElementById('feed')
  
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    container.href = this.url
    
    container.appendChild(link)
    link.appendChild(card)
    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(p)
    app.appendChild(container)
  })
})()
