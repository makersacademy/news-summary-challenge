class SummaryView {
  constructor (article) {
    this.article = article
  }

  renderSummaryHTML () {
    return `<article>${this.formatImage(this.article.image)}<h2>${this.article.headline}</h2><p>${this.formatSummary(this.article.summary)}</p></article>`
  }

  formatImage (imageData) {
    var truncatedData = imageData.split(/src=/)[1].split(/ width/)[0]
    return `<figure><img class="headline-image" src=${truncatedData} /></figure>`
  }

  formatSummary (summaryData) {
    return summaryData.join('<br><br>')
  }
}

export { SummaryView }
