
const ApiClass = require('./lib/articlesApi')
const ModelClass = require('./lib/articlesModel')
const ViewClass = require('./lib/articlesView')

const api = new ApiClass();
const model = new ModelClass();
const view = new ViewClass(model);

api.loadArticles(data => data.forEach( article => {
  model.addArticle(article.webTitle);
  view.displayArticles();
}));
