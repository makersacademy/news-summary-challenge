const NewsModel = require('./newsModel')
const model = new NewsModel
const NewsApi = require('./newsApi')
const api = new NewsApi;
const NewsView = require('./newsView')
const view = new NewsView(model, api)

view.displayNewsFromApi();