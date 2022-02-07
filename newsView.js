class newsView {
  constructor(model) {
    this.model = model
    this.articlesDivEl = document.querySelector('#articles-main')
  }

  displayArticles() {
    let articles = this.model.getArticles();
    for (let index = 0; index < articles.length; index++) {
      this.#addDiv('article', index)
      this.#displayTitle(articles[index].webTitle, index)
      this.#displayImage(articles[index].fields.thumbnail, index)
    }
  }

  #displayTitle(heading, index) {
    let articleDiv = document.querySelector(`div#article-${index}`)
    let headlineDiv = document.createElement(`h1`)
    headlineDiv.append(heading)
    articleDiv.append(headlineDiv)
  }

  #addDiv(className, index) {
    let articleDiv = document.createElement(`div`)
    articleDiv.className = className
    articleDiv.id = `${className}-${index}`
    this.articlesDivEl.append(articleDiv)
  }

  #displayImage(imageUrl, index) {
    let articleDiv = document.querySelector(`div#article-${index}`)
    let imgEl = document.createElement('img')
    imgEl.src = imageUrl
    articleDiv.append(imgEl)
  }
}

module.exports = newsView;