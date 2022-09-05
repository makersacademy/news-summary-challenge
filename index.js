const NewsApi = require('./newsApi')
const FeedModel = require('./model/feedModel')
const NewsView = require('./newsView')

const api = new NewsApi
const feed = new FeedModel
const view = new NewsView(feed)

// const envFilePlugin = require('esbuild-envfile-plugin');

// require('esbuild').build({
//     plugins: [envFilePlugin]
// });

api.loadSummaries((response) => {
  feed.setArticles(response)
})

console.log("I've displayed the articles!")
