console.log("working");

const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");
const NewsView = require("./newsView");
const model = new NewsModel();
const client = new NewsClient();
const view = new NewsView(model, client);

view.loadTodaysNews();
console.log(process.env.API_KEY);
