class SummaryView {
  constructor(article) {
    this.article = article
  }

  renderSummaryHTML() {
    return `<article>${this.formatImage(this.article.image)}<h2>${this.article.headline}</h2><p>${this.article.summary}</p></article>`
  }

  formatImage(imageData) {
    var truncatedData = imageData.split(/src=/)[1].split(/ width/)[0]
    return `<figure class="headline-image"><img src=${truncatedData} width="500" height="300"/></figure>`
  }
}

export { SummaryView }
