require("dotenv").config();

const ArticlesModel = require("./src/articlesModel");
const ArticlesView = require("./src/articlesView");
const NewYorkTimesApi = require("./src/newYorkTimesApi");
const ArticlesController = require("./src/articlesController");

const api = new NewYorkTimesApi();
const view = new ArticlesView();
const model = new ArticlesModel();
const controller = new ArticlesController(model, view, api);

controller.loadArticles();
