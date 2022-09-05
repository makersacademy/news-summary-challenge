const NewsApi = require('./newsApi')
const FeedModel = require('./model/feedModel')
const NewsView = require('./newsView')

const api = new NewsApi
const feed = new FeedModel
const view = new NewsView(feed)

api.loadSummaries((response) => {
  feed.setArticles(response)
})

console.log("I've displayed the articles!")
