const NewsClient = require('./src/newsClient');
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

const client = new NewsClient();
const model = new NewsModel();
const news = require('./mockNews.js');
model.setNews(news);

const view = new NewsView(model, client);
view.displayNews();
