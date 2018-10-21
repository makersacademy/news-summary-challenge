class ArticleBuilder {
  constructor(articles, dm) {
    this.articles = articles
    this.dm = dm
  }

  renderArticles() {
    this.articles.forEach((article) => {
      this.buildArticleDiv(article.id)
      this.buildImg(article.fields.thumbnail, article.id)
      this.buildHeadLine(article.webTitle, article.id)
      this.buildSummary(article.sentences, article.id)
      this.buildLink(article.webUrl, article.id)
    })
  }

  buildArticleDiv(id) {
    let div = this.dm.createElement("div", id, "article-div")
    this.dm.addElement(div, "articles-span")
  }

  buildHeadLine(headlineText, parentId) {
    let headlineId = "headline" + parentId
    let headline = this.dm.createElement("H2", headlineId, "headline")
    this.dm.addElement(headline, parentId)
    this.dm.addText(headlineId, headlineText)
  }

  buildSummary(summaryText, parentId) {
    let summaryId = "summary" + parentId
    let summary = this.dm.createElement("p", summaryId, "summary")
    this.dm.addElement(summary, parentId)
    this.dm.addText(summaryId, summaryText)
  }

  buildLink(linkUrl, parentId) {
    let linkId = "link" + parentId
    let link = this.dm.createLinkElement(linkUrl, linkId, "link")
    this.dm.addElement(link, parentId)
    this.dm.addText(linkId, "Full Article")
  }

  buildImg(imgUrl, parentId) {
    let imgId = "img" + parentId
    let img = this.dm.createImgElement(imgUrl, imgId, "img")
    this.dm.addElement(img, parentId)
  }
}

export default ArticleBuilder
