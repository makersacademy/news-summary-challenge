const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");


const model = new NewsModel;
const client = new NewsClient;

const view = new NewsView(model, client);

view.displayNewsFromApi();
