// index.js
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const model = new NewsModel();
model.add('Headline One')
model.add('Headline Two')
const view = new NewsView(model);
view.displayStories();