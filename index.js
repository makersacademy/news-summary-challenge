const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');

model = new ArticlesModel();
view = new ArticlesView(model);

console.log('Hello!');

const articlesData = [
  {data: "First article"},
  {data: "Second article"},
  {data: "Third article"}
];

model.setArticles(articlesData);

view.displayArticles();
