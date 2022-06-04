const NewsApi = require('./models/newsApi');
const NewsModel = require('./models/newsModel');
const NewsView = require('./views/newsView');

const api = new NewsApi();
const model = new NewsModel();
const view = new NewsView();

console.log('Hello!');
