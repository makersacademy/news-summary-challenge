const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');

const model = new ArticlesModel();
const view = new ArticlesView(model);

const article = {
  headline: 'Real Madrid reach the Champions League final'
}

view.model.addArticle(article);

view.displayArticles();

console.log("The news app is running");