const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const NewsApi = require('./newsApi');

const model = new NewsModel;
const api = new NewsApi;
const view = new NewsView(model, api);