'use strict'

class Guardian {
  constructor () {
    this.headlines = []
  }

  getHeadlines (request = new XMLHttpRequest()) {
    request = request
    let key = KEYS.guardian
    let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}&show-fields=thumbnail`

    request.open('GET', url, false)
    request.onload = () => {
      let data = JSON.parse(request.response)
      this.headlines.push(data.response.results)
    }
    request.send()
  }

  renderArticles () {
    let articlesDiv = document.createElement('div')

    this.headlines[0].forEach((headline) => {
      articlesDiv.appendChild(this.renderArticle(headline))
    })
    return articlesDiv
  }

  renderArticle (headline) {
    let article = document.createElement('p')
    let title = this.createHyperlink(headline)
    let image = this.fetchImage(headline)

    article.appendChild(title)
    article.appendChild(image)

    return article
  }

  createHyperlink (headline) {
    let title = document.createElement('a')
    title.setAttribute('href', headline.webUrl)
    title.innerText = headline.webTitle
    return title
  }

  fetchImage (headline) {
    let image = document.createElement('img')
    image.src = headline.fields.thumbnail
    return image
  }
}
