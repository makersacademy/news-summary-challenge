const ArticleModel = require("./articleModel")

class FeedModel {
  constructor() {
    this.feed = []
  }
  
  getFeed() {
    return this.feed
  }

  setArticles(articleSummaries) {
    articleSummaries.response.results.forEach((article) => {
      this.feed.push(new ArticleModel(article))
    })
  }

  // setImages(articleSummaries) {
  //   articleSummaries.response.results.forEach((article) => {
  //     article.imageUrl
  //   })
  // }
}

module.exports = FeedModel