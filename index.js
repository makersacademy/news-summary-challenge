const NewsView = require("./newsView");
const NewsModel = require("./newsModel")

const model = new NewsModel();
model.addHeadline("HEADLINE 1")

const view = new NewsView(model);
view.displayHeadlines();

console.log('News Summary App is running!');