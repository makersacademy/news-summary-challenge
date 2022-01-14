const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const NewsApi = require('./newsApi');

const api = new NewsApi();
const model = new ArticlesModel();
const view = new ArticlesView(model, api);

api.loadArticles((articles) => {
  model.setArticles(articles);
  view.displayArticles();
});
