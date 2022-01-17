const NewsApi = require("./newsApi");
const NewsAppModel = require("./newsAppModel");
const NewsAppView = require("./newsAppView");

let api = new NewsApi();
let model = new NewsAppModel();

let view = new NewsAppView(model, api);

api.getArticles((articles) => {
  model.setArticles(articles);
  view.displayArticles();
})

fetch("https://content.guardianapis.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates").then(console.log(response));