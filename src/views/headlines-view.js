class HeadlinesView {
  constructor(headlinesList) {
    this.headlinesList = headlinesList
  }

  renderListHTML() {
    var html = this.headlinesList.articles.map(
      article => `<li><a href='#articles/${article.id}'>${article.headline}</a></li>`
    ).join('')
    return `<ul>${html}</ul>`
  }
}

export { HeadlinesView }
