const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const ArticlesApi = require('./articlesApi');

model = new ArticlesModel();
api = new ArticlesApi();
view = new ArticlesView(model);

console.log('Hello!');

// const articlesData = [
//   {headline: "First article", thumbnail: "image1"},
//   {headline: "Second article", thumbnail: "image 2"},
//   {headline: "Third article", thumbnail: "image 3"}
// ];

// model.setArticles(articlesData);
// view.displayArticles();

api.loadArticles((articles) => {
  let articlesList = articles.response.results;
  console.log(articlesList);    // Log list of articles
  model.setArticles(articlesList);
  view.displayArticles();
});
  
model.reset();
