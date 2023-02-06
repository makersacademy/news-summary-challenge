const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');
const apiKey = require('./apiKey');

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

view.displayNews();