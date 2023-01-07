const ArticleClient = require('./articleClient');
const ArticleModel = require('./articleModel');
const ArticleView = require('./articleView');

console.log('Running the news app');

const client = new ArticleClient();
const model = new ArticleModel();
const view = new ArticleView(client, model);

view.fetchArticlesFromApi(new Date().toJSON().slice(0, 10));
