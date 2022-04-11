const NewsModel = require('./newsModel.js')
const NewsApi = require('./newsApi.js')
const NewsView = require('./newsView.js')

const model = new NewsModel()
const api = new NewsApi()
const view = new NewsView(model, api)

api.loadNews('', (news) => {
  model.setNews(news);
  view.displayNews();
}, () => {
  view.displayError();
});