import * as env from 'env';
const NewsApi = require('./newsApi')
const NewsModel = require('./newsModel')

const api = new NewsApi(env.GUARDIAN_API_KEY);
const model = new NewsModel();

api.loadArticles((data) => {
  model.setArticles(data.response.results)
})