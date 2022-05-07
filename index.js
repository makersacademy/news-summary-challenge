const NewsModel = require('./newsModel');
const NewsApi = require('./newsApi');
const NewsView = require('./newsView');

const model = new NewsModel();
const api = new NewsApi();
const view = new NewsView(model, api);

view.displayNewsFromApi('');
