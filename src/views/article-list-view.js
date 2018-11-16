class ArticleListView {
  constructor(articleList) {
    this.articleList = articleList
  }

  renderListHTML() {
    var html = this.articleList.articles.map(
      article => `<li><a href='#articles/${article.id}'>${article.headline}</a></li>`
    ).join('')
    return `<ul>${html}</ul>`
  }
}

export { ArticleListView }
