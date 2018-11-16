class ArticleListView {
  constructor(articleList) {
    this.articleList = articleList
  }

  renderListHTML() {
    var html = this.articleList.articles.map(
      article => `<li><a href='#articles/0'>${article.headline}</a></li>`
    ).join('')
    return `<ul>${html}</ul>`
  }
}

export { ArticleListView }
