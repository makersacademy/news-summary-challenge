const NewsView = require("./newsView");
const NewsModel = require("./newsModel")
const NewsApi = require("./newsApi")

const api = new NewsApi();
const model = new NewsModel();
const view = new NewsView(model);

api.loadHeadlines((headlines) => {
  model.setHeadlines(headlines);
  view.displayHeadlines();
})

console.log('News Summary App is running!');