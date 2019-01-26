'use strict'

class Guardian {
  constructor () {
    this.headlines = []
  }

  getHeadlines (request = new XMLHttpRequest()) {
    request = request
    let key = KEYS.guardian
    let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}`

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
    let title = document.createElement('a')

    title.setAttribute('href', headline.webUrl)
    title.innerText = headline.webTitle
    article.appendChild(title)

    return article
  }
}
