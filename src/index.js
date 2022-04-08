const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const NewsApi = require('./newsApi')

const model = new NewsModel;
const api = new NewsAPI;
const view = new NewsView(model, api);