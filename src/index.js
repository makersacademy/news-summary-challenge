const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const NewsClient = require("./newsClient");

const model = new NewsModel();
const client = new NewsClient();
const view = new NewsView(model, client);

view.displayNewsStories();
