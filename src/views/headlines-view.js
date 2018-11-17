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
    var truncatedData = imageData.split(/src=/)[1].split(/ width/)[0]
    return `<figure class="headline-image"><img src=${truncatedData} width="500" height="300"/></figure>`
  }
}

export { HeadlinesView }
