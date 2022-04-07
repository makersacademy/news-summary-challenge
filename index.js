const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const ArticlesApi = require('./articlesApi');

model = new ArticlesModel();
api = new ArticlesApi();
view = new ArticlesView(model, api);

console.log('Hello!');

// API
api.loadArticles((articles) => {
  let articlesList = articles.response.results;
  console.log(articlesList);    // Log list of articles
  model.setArticles(articlesList);
  view.displayArticles();
});

model.reset();
