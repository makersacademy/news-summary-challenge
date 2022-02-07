import * as env from 'env';
const NewsApi = require('./newsApi')
const NewsModel = require('./newsModel')
const NewsView = require('./newsView')

const api = new NewsApi(env.GUARDIAN_API_KEY);
const model = new NewsModel();
const view = new NewsView(model);

api.loadArticles((data) => {
  model.setArticles(data.response.results)
  view.displayArticles();
})