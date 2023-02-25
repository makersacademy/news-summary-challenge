const ArticlesModel = require('./lib/articlesModel')
const ArticlesClient = require('./lib/articlesClient')
const ArticlesView = require('./lib/articlesView')

const model = new ArticlesModel();
const client = new ArticlesClient();
const view = new ArticlesView(model, client);

console.log('Testing');
view.getArticlesFromApi();
