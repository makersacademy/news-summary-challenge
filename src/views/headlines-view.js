class HeadlinesView {
  constructor (articleList) {
    this.articleList = articleList
  }

  renderListHTML () {
    var html = this.articleList.articles.map(
      article => `<article>${this.formatImage(article.image)}<a href="#articles/${article.id}">${article.headline}</a></article>`
    ).join('')
    return html
  }

  formatImage (imageData) {
    if (!imageData) { return imageData }
    var truncatedData = imageData.split(/src=/)[1].split(/ width/)[0]
    return `<figure><img class="headline-image" src=${truncatedData} /></figure>`
  }
}

export { HeadlinesView }
