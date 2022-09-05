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
}

module.exports = FeedModel