console.log("bundle is working")

const NewsModel = require("./newsModel")
const NewsView = require("./newsView")

const model = new NewsModel();
const view = new NewsView(model);


model.addHeadline('breaking news');
model.addHeadline('breaking news');
model.addHeadline('breaking news');

view.displayHeadlines();
