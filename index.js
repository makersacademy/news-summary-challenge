const ArticleModel = require('./articleModel');
const ArticleView = require('./articleView');
const GuardianApi = require('./guardianApi');
const model = new ArticleModel();
const view = new ArticleView(model, api);
const api = new GuardianApi();



console.log('hello, world')
console.log(view.display())
// console.log(model.getArticleInfo())