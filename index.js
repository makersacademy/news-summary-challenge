const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const ArticlesApi = require('./articlesApi');

model = new ArticlesModel();
api = new ArticlesApi();
view = new ArticlesView(model, api);

console.log('Hello!');
