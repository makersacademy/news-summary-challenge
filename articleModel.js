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
    return headlines
  }
}

  // addNote(note) {
  //   this.model.push(note)
  // }

  // reset() {
  //   this.model = []
  //   return this.model
  // }
  
  // setNotes(notes) {
  //   this.model = notes
  // }

module.exports = ArticleModel;