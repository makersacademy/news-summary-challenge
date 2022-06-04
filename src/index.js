const NewsApi = require('./models/newsApi');
const NewsModel = require('./models/newsModel');
const NewsView = require('./views/newsView');

const api = new NewsApi();
const model = new NewsModel();
const view = new NewsView(model, api);

api.loadNews((headlines) => {
  model.addNews(headlines);
  view.displayNews();
});

console.log('Hello!');
