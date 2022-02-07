const NewsView = require('./newsView');
const NewsModel = require('./newsModel')
const NewsApi = require('./newsApi')

const api = new NewsApi();
const model = new NewsModel();
const views = new NewsView(model, api);