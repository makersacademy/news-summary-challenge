const NewsModel = require('./newsModel')
const NewsView = require('./newsView')
const NewsClient = require('./newsClient')

const news_model = new NewsModel
const news_client = new NewsClient
const news_view = new NewsView(news_model, news_client)

console.log("are we here?")
