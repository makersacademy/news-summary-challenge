console.log("the app is running");
const ArticlesModel = require("./src/ArticlesModel.js");
const ArticlesView = require("./src/ArticlesView.js");
const GuardianApi = require("./src/GuardianApi.js");

const client = new GuardianApi();
const model = new ArticlesModel();
const view = new ArticlesView(model, client);

view.displayArticlesFromApi();
// client.searchArticles();
