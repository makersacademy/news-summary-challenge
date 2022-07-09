const NewsModel = require('./newsModel')
const model = new NewsModel
const NewsView = require('./newsView')
const view = new NewsView(model)

view.displayNews();