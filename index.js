const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const ArticlesApi = require('./articlesApi');

model = new ArticlesModel();
api = new ArticlesApi();
view = new ArticlesView(model);

console.log('Hello!');

// const articlesData = [
//   {data: "First article"},
//   {data: "Second article"},
//   {data: "Third article"}
// ];

// model.setArticles(articlesData);
// view.displayArticles();

api.loadArticles((articles) => {
  let articlesList = articles.response.results;
  console.log(articlesList);
  model.setArticles(articlesList);
  view.displayArticles();
});
  
model.reset();
