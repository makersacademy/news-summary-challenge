'use strict'
/* global XMLHttpRequest, KEYS */

class Guardian {
  constructor () {
    this.headlines = []
    this.summary = ''
  }

  getHeadlines (request = new XMLHttpRequest()) {
    let key = KEYS.guardian
    let url = `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}&show-fields=thumbnail`

    request.open('GET', url, false)
    request.onload = () => {
      let data = JSON.parse(request.response)
      
      if (request.status >= 200 && request.status < 400) {
        this.headlines.push(data.response.results)
      } else {
       console.log('Failed to retrieve news')
      }
    }
    request.send()
  }

  getSummary (headline, request = new XMLHttpRequest()) {
    let makersAPI = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl='
    let aylienAPI = 'https://api.aylien.com/api/v1/summarize?url='
    let url = `${makersAPI}${aylienAPI}${headline.webUrl}`

    request.open('GET', url, false)
    request.onload = () => {
      let data = JSON.parse(request.response)

      if (request.status >= 200 && request.status < 400) {
        this.summary = data.sentences.toString()
      } else {
       console.log('Failed to summarise article')
      }
    }
    request.send()
  }

  renderArticles () {
    let articlesDiv = document.createElement('div')

    this.headlines[0].forEach((headline, index) => {
      articlesDiv.appendChild(this.renderArticle(headline, index))
    })
    return articlesDiv
  }

  renderArticle (headline, index) {
    let article = document.createElement('p')
    let titleP = document.createElement('p')
    let linkP = document.createElement('p')
    let image = this.fetchImage(headline)
    let title = this.createSummaryLink(headline, index)
    let link = this.linkToOriginalArticle(headline)

    article.appendChild(image)
    titleP.appendChild(title)
    article.appendChild(titleP)
    linkP.appendChild(link)
    article.appendChild(linkP)

    return article
  }

  createSummaryLink (headline, index) {
    let title = document.createElement('a')
    title.href = `#article/${index}`
    title.setAttribute('class', 'link')
    title.id = index
    title.innerText = headline.webTitle
    return title
  }

  linkToOriginalArticle (headline) {
    let link = document.createElement('a')
    link.setAttribute('href', headline.webUrl)
    link.innerText = 'Original Article'
    return link
  }

  fetchImage (headline) {
    let image = document.createElement('img')
    image.src = headline.fields.thumbnail
    return image
  }
}
