const NewsApi = require('./newsApi');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

const newsApi = new NewsApi();
const newsModel = new NewsModel();
const newsView = new NewsView(newsModel, newsApi);

