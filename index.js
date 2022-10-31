const ArticleModel = require('./articleModel');
const ArticleView = require('./articleView');
const GuardianApi = require('./guardianApi');
const model = new ArticleModel();
const api = new GuardianApi();
const view = new ArticleView(model, api);


console.log('hello, world')
view.displayArticlesFromApi()
// console.log(model.getArticleInfo())