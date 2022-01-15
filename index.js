
const ApiClass = require('./lib/articlesApi')
const ModelClass = require('./lib/articlesModel')
const ViewClass = require('./lib/articlesView')

const api = new ApiClass();
const model = new ModelClass();
const view = new ViewClass(model);


api.loadHeadlines(data => data.response.results.forEach( article => {
  console.log(article)
  model.addArticle(article.webTitle);
  view.displayHeadlines();
}));

