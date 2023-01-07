// index.js
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const model = new NewsModel();
model.add('test')
const view = new NewsView(model);
view.displayStories();