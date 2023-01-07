// index.js
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const NewsClient = require("./newsClient");

const model = new NewsModel();
model.add('Headline One')
model.add('Headline Two')
const view = new NewsView(model);
view.displayStories();
const client = new NewsClient();
client.fetchStories(console.log);