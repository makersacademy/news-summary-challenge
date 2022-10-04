const ArticlesModel = require("./src/articlesModel");
const ArticlesView = require("./src/articlesView");
const NewYorkTimesApi = require("./src/newYorkTimesApi");

const api = new NewYorkTimesApi();
const view = new ArticlesView(api);
view.loadArticles();
