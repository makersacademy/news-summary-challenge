class ArticleModel {
  constructor() {
    this.articles = null
    this.headlines = []
  }

  setArticleInfo(articles) {
    this.articles = articles
  }

  getArticleInfo() {
    // console.log(this.articles.response.results)
  return this.articles
  }

  getArticleHeadlines() {
    const articleData = this.articles.response.results
    let headlines = articleData.map(article => {
      return article.webTitle
    })
    // console.log(`headlines: ${headlines}`)
    return headlines
  }
}
module.exports = ArticleModel;