class FrontPage {
  constructor() {
    this.articles = []
    this.summaries = []
  }

  webUrls() {
    return this.articles.map(article => article.webUrl)
  }
}
