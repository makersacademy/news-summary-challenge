const NewsApi = require('./newsApi')
const NewsView = require('./newsView')
const ArticleModel = require('./model/articleModel')
const FeedModel = require('./model/feedModel')

const api = new NewsApi
const feed = new FeedModel
const view = new NewsView(feed)

api.loadSummaries((response) => {
  feed.setArticles(response)
})

console.log("I've displayed the articles!")