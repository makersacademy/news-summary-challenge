const ArticlesModel = require("./articlesModel");
const ArticlesApi = require("./articlesApi");
const ArticlesView = require("./articlesView");

const model = new ArticlesModel();
const api = new ArticlesApi();
const view = new ArticlesView(model, api);

view.displayArticlesFromApi();

console.log("The news app is running");
