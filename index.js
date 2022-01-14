const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');

const model = new ArticlesModel();
model.addArticle('test headline');

const view = new ArticlesView(model);

view.displayArticles();
